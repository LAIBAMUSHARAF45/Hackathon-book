import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from './components/Chatbot';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const container = document.createElement('div');
    container.id = 'chatbot-container';
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<Chatbot />);
}
