import React from 'react';
import Layout from '@theme/Layout';

export default function Login() {
  return (
    <Layout title="Login">
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="card" style={{ padding: '2rem', width: '320px' }}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            style={{ width: '100%', marginBottom: '1rem' }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{ width: '100%', marginBottom: '1rem' }}
          />

          <button style={{ width: '100%' }}>
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
}
