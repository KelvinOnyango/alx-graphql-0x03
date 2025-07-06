import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const TestErrorPage: React.FC = () => {
  return (
    <div>
      <h1>Error Boundary Test Page</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default TestErrorPage;
