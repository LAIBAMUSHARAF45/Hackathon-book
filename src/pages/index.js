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
          minHeight: '90vh',
          display: 'grid',
          placeItems: 'center',
          padding: '90px 20px',
          background:
            'radial-gradient(1200px 600px at 10% -10%, #e0e7ff 0%, transparent 40%), radial-gradient(1200px 600px at 110% 10%, #c7d2fe 0%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
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
          {/* Left: Content */}
          <div style={{ textAlign: 'left' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: '999px',
                background: '#eef2ff',
                color: '#4f46e5',
                fontWeight: 600,
                fontSize: '0.85rem',
                marginBottom: '14px',
              }}
            >
              Open-source • Beginner → Advanced
            </span>

            <h1
              style={{
                fontSize: '3.25rem',
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '12px 0 18px',
                color: '#0f172a',
              }}
            >
              Physical AI &<br />
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #4f46e5, #22d3ee)',
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
                fontSize: '1.15rem',
                color: '#475569',
                maxWidth: '620px',
                marginBottom: '28px',
              }}
            >
              A complete open-source guide to modern robotics: ROS 2, Digital Twins,
              NVIDIA Isaac, motor control, and Vision-Language-Action systems — everything
              you need to build real humanoids.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="/docs/intro"
                style={{
                  padding: '14px 28px',
                  background:
                    'linear-gradient(135deg, #4f46e5, #6366f1)',
                  color: '#fff',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 10px 30px rgba(79,70,229,.35)',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow =
                    '0 16px 40px rgba(79,70,229,.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 30px rgba(79,70,229,.35)';
                }}
              >
                🚀 Start Learning
              </a>

              <a
                href="https://github.com/LAIBAMUSHARAF45/Hackathon-book"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '14px 26px',
                  borderRadius: '12px',
                  border: '1.5px solid #c7d2fe',
                  color: '#4f46e5',
                  background: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'transform .25s ease, background .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#eef2ff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                ⭐ View on GitHub
              </a>
            </div>

            <p
              style={{
                marginTop: '36px',
                color: '#64748b',
                fontSize: '0.95rem',
              }}
            >
              Tip: Use the sidebar to navigate chapters and hands-on labs.
            </p>
          </div>

          {/* Right: Visual Card */}
          <div
            style={{
              background:
                'linear-gradient(180deg, #ffffff, #f1f5f9)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow:
                '0 20px 60px rgba(2, 6, 23, .12), inset 0 1px 0 #fff',
            }}
          >
            <div
              style={{
                borderRadius: '14px',
                padding: '22px',
                background:
                  'linear-gradient(135deg, #eef2ff, #ecfeff)',
              }}
            >
              <h3 style={{ margin: 0, color: '#0f172a' }}>
                What you’ll learn
              </h3>
              <ul
                style={{
                  marginTop: '12px',
                  paddingLeft: '18px',
                  color: '#334155',
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

        {/* Responsive tweak */}
        <style>{`
          @media (max-width: 900px) {
            main section { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
    </Layout>
  );
}
