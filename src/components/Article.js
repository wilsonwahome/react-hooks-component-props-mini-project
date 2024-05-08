import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970"; // Default date value

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
