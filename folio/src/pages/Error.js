// src/pages/Error.js
import React from 'react';
import './Error.css';
import { HashLink } from 'react-router-hash-link';

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>Try again later.</p>
      <HashLink smooth to="/#project">
        <button className="go-back-btn">
          Go Back
        </button>
      </HashLink>
    </div>
  );
};

export default Error;
