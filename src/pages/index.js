import React from 'react';
import Layout from '@theme/Layout';

import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="Learn ROS 2, NVIDIA Isaac, Digital Twins & Vision-Language-Action systems"
    >
      <Chatbot />
      <main
        style={{
          minHeight: '90vh',
          display: 'grid',
          placeItems: 'center',
          padding: '90px 20px',
          background:
            'radial-gradient(1200px 600px at 10% -10%, #0f797f33 0%, transparent 40%), radial-gradient(1200px 600px at 110% 10%, #00838e33 0%, transparent 40%), linear-gradient(180deg, #021f22 0%, #031314 100%)',
        }}
      >
        <section
          style={{
            maxWidth: '1100px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <span

              style={{
                display: 'inline-block',
                padding: '6px 14px',
                borderRadius: '999px',
                background: '#0f797f',
                color: '#e6fffb',
                fontWeight: 600,
                fontSize: '0.85rem',
                marginBottom: '16px',
              }}
            >
              Open-source • Beginner → Advanced
            </span>

            <h1
              style={{
                fontSize: '3.2rem',
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '12px 0 18px',
                color: '#e6fffb',
              }}
            >
              Physical AI &<br />
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #0f797f, #00838e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Humanoid Robotics
              </span>
              <br />Textbook
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#b2dfdb',
                maxWidth: '620px',
                marginBottom: '28px',
              }}
            >
              A complete open-source guide to modern robotics: ROS 2, Digital
              Twins, NVIDIA Isaac, motor control, and Vision-Language-Action
              systems — everything you need to build real humanoids.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="/docs/intro"
                style={{
                  padding: '14px 30px',
                  background:
                    'linear-gradient(135deg, #00626b, #00838e)',
                  color: '#e6fffb',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 12px 30px rgba(0,131,142,.45)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px rgba(0,131,142,.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(0,131,142,.45)';
                }}
              >
                🚀 Start Learning
              </a>

              <a
                href="https://github.com/LAIBAMUSHARAF45/Hackathon-book"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '14px 28px',
                  borderRadius: '14px',
                  border: '1.5px solid #0f797f',
                  color: '#8ff3f1',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0b5b5f';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                ⭐ View on GitHub
              </a>
            </div>

            <p
              style={{
                marginTop: '36px',
                color: '#7fd1cf',
                fontSize: '0.95rem',
              }}
            >
              Tip: Use the sidebar to navigate chapters and hands-on labs.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            style={{
              background:
                'linear-gradient(180deg, #0b5b5f, #022b2e)',
              borderRadius: '22px',
              padding: '28px',
              boxShadow: '0 25px 60px rgba(0,0,0,.45)',
            }}
          >
            <div
              style={{
                borderRadius: '16px',
                padding: '22px',
                background:
                  'linear-gradient(135deg, #00626b, #0f797f)',
              }}
            >
              <h3 style={{ margin: 0, color: '#e6fffb' }}>
                What you’ll learn
              </h3>
              <ul
                style={{
                  marginTop: '12px',
                  paddingLeft: '18px',
                  color: '#ccfbf1',
                  lineHeight: 1.7,
                }}
              >
                <li>ROS 2 fundamentals & middleware</li>
                <li>Digital Twin simulations</li>
                <li>NVIDIA Isaac & robotics AI</li>
                <li>Perception, control & VLA systems</li>
                <li>End-to-end humanoid pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            main section { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
    </Layout>
  );
}
