import React from 'react';

const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error for ErrorBoundary!');
  return null;
};

export default ErrorProneComponent;
