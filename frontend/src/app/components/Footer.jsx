import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <small className="copyright__content">
         Made with <span className="text-red-500">&#10084;</span> by{' '}
        <a
          href="https://makenson.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Makenson Noel
        </a>
      </small>
    </footer>
  );
};

export default Footer;
