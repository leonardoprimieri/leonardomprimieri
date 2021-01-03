import React from 'react';

import './style.css';

const SectionTitle = ({ children }) => {
  return (
    <div className="section-name">
      <span>{children}</span>
      <hr />
    </div>
  );
};

export default SectionTitle;
