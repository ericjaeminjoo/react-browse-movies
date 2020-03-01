import React from 'react';
import { Link } from '@reach/router';

const Pages = ({ currentPage }) => {
  return (
    <div>
      {currentPage === 1 ? (
        <Link to={`${window.location.pathname}&page=${currentPage + 1}`}>
          Next Page
        </Link>
      ) : (
        <div>
          <Link to={`${window.location.pathname}&page=${currentPage - 1}`}>
            Previous Page
          </Link>
          <Link to={`${window.location.pathname}&page=${currentPage + 1}`}>
            Next Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pages;
