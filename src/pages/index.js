import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="Learn ROS 2, NVIDIA Isaac, Digital Twins & Vision-Language-Action systems"
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 20px',
          textAlign: 'center',
          background: '#f9fafb',
          minHeight: '80vh',
        }}
      >
        {/* Hero Section */}
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#111827',
          }}
        >
        
          <span style={{ color: '#4f46e5' }}>Physical AI & Humanoid Robotics</span>
          
          <br />
          Textbook
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            color: '#4b5563',
            marginBottom: '40px',
          }}
        >
          A complete open-source book covering modern robotics: ROS 2, Digital Twin simulations,
          NVIDIA Isaac, Motor Control, VLA Systems, and everything you need to build real humanoids.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="/docs/intro"
            style={{
              padding: '12px 25px',
              backgroundColor: '#4f46e5',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(79,70,229,0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4338ca';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(79,70,229,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4f46e5';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px rgba(79,70,229,0.3)';
            }}
          >
            🚀 Start Learning
          </a>

          <a
            href=""
            target="_blank"
            style={{
              padding: '12px 25px',
              border: '2px solid #4f46e5',
              borderRadius: '8px',
              color: '#4f46e5',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4f46e5';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#4f46e5';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            ⭐ View on GitHub
          </a>
        </div>

        {/* Footer Section */}
        <p
          style={{
            marginTop: '50px',
            color: '#6b7280',
            fontSize: '0.95rem',
          }}
        >
          Explore the documentation using the sidebar on the left.
        </p>
      </main>
    </Layout>
  );
}
