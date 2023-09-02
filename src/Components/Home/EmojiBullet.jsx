import React from 'react';

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <li style={{ fontSize: '1rem', lineHeight: 1.5, cursor: 'default' }}>
      <span
        aria-label="cheese"
        role="img"
        style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}
      >
        {emoji}
      </span>{" "}
      {text}
    </li>
  );
}

export default EmojiBullet;
