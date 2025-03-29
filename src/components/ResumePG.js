import React from 'react';
import { Link } from 'react-router-dom';

function ResumePG() {
  return (
    <div className="resume-container">
      <h2 className="text-center mb-4">My Resume</h2>
      {/* Embed the PDF file */}
      <iframe
        src="/Resume/Resume100.pdf"
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href="/Resume/Resume100.pdf"
          download="Resume100.pdf"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumePG;