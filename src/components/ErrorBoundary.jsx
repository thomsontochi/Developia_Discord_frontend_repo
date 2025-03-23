// components/ErrorBoundary.jsx
import React from 'react';
import { logError } from '../utils/logger';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, 'Error Boundary Catch');
    console.error('Error details:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card border-0 shadow-lg rounded-4 p-4">
                  <div className="text-center mb-4">
                    <div className="error-icon rounded-circle bg-danger bg-opacity-10 mx-auto mb-4"
                         style={{
                           width: '80px',
                           height: '80px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                         }}>
                      <i className="fas fa-exclamation-triangle text-danger fa-2x"></i>
                    </div>
                    <h2 className="fw-bold text-danger mb-3">Oops! Something went wrong</h2>
                    <p className="text-muted mb-4">
                      {this.state.error?.message || 'An unexpected error occurred. Please try again.'}
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <button 
                        className="btn btn-primary px-4"
                        onClick={() => window.location.reload()}
                      >
                        <i className="fas fa-redo me-2"></i>
                        Refresh Page
                      </button>
                      <button 
                        className="btn btn-outline-secondary px-4"
                        onClick={() => window.location.href = '/'}
                      >
                        <i className="fas fa-home me-2"></i>
                        Go Home
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-top">
                    <p className="small text-center text-muted mb-0">
                      If the problem persists, please contact our support team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;