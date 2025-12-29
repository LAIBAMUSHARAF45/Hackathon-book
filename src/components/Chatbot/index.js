import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import styles from './Chatbot.module.css';

const API_URL = 'http://localhost:8001/chat';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (selection && selection.toString().trim().length > 0) {
                setSelectedText(selection.toString().trim());
            } else {
                setSelectedText(null);
            }
        };

        document.addEventListener('selectionchange', handleSelection);
        return () => document.removeEventListener('selectionchange', handleSelection);
    }, []);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const currentMessage = inputValue;
        const context = selectedText;
        setInputValue('');
        setSelectedText(null);
        if (window.getSelection()) {
            window.getSelection().removeAllRanges();
        }

        setMessages((prev) => [
            ...prev,
            { role: 'user', content: currentMessage, context: context || undefined },
        ]);
        setIsLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: currentMessage,
                    session_id: sessionId,
                    selected_text: context
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.session_id) {
                setSessionId(data.session_id);
            }

            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: data.answer },
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I encountered an error. Please ensure the backend is running at http://localhost:8001.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <button
                className={styles.floatingButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                )}
            </button>

            <div className={`${styles.chatContainer} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <span>Book Assistant</span>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className={styles.messages}>
                    {messages.length === 0 && (
                        <div className={`${styles.message} ${styles.botMessage}`}>
                            Hello! I'm your AI assistant for this book. Ask me anything, or select text on the page to ask about it specifically.
                        </div>
                    )}
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}
                        >
                            {msg.context && (
                                <div className={styles.selectionContext}>
                                    Context: "{msg.context.substring(0, 50)}..."
                                </div>
                            )}
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className={`${styles.message} ${styles.botMessage}`}>
                            <div className={styles.loadingDot}></div>
                            <div className={styles.loadingDot}></div>
                            <div className={styles.loadingDot}></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {selectedText && (
                    <div className={styles.contextPopup}>
                        <span>Referring to selected text</span>
                        <button
                            onClick={() => {
                                setSelectedText(null);
                                if (window.getSelection()) {
                                    window.getSelection().removeAllRanges();
                                }
                            }}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginLeft: '10px' }}
                        >
                            ×
                        </button>
                    </div>
                )}

                <div className={styles.inputArea}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Type your question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button className={styles.sendButton} onClick={handleSendMessage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </>
    );
}
