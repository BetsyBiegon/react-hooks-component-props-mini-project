import React from 'react';

function Article({ title, date, preview }) {
  const minutesToRead = Math.ceil((preview.split(' ').length / 200) * 5);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>
        {Array.from({ length: Math.ceil(minutesToRead / 5) }, (_, i) => (
          <span key={i} role="img" aria-label="coffee cup">☕️</span>
        ))}
        {Array.from({ length: Math.ceil((minutesToRead - 30) / 10) }, (_, i) => (
          <span key={i} role="img" aria-label="bento box">🍱</span>
        ))}
        {' '}
        {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;
