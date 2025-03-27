import React from 'react';

export default function ProfileCard() {
  return (
    <div style={styles.card}>
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Avatar"
        style={styles.avatar}
      />
      <h2 style={styles.name}>John Doe</h2>
      <p style={styles.description}>
        A passionate developer who loves to create amazing applications.
      </p>
      <button style={styles.button}>Follow</button>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    padding: '20px',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#1976d2',
    color: '#fff',
    width: '120px',
    borderRadius: '4px',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
};
