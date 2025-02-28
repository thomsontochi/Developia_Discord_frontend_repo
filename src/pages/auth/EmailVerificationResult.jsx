import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { showToast } from '../../utility/toast';
import AuthService from '../../services/auth.service';

const EmailVerificationResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get('status');
  const email = searchParams.get('email');

  useEffect(() => {
    const handleVerification = async () => {
      if (status === 'success' && email) {
        try {
          await AuthService.confirmEmailVerification(email);
          
          // If this was opened in a new tab
          if (window.opener) {
            // Send message to original tab
            window.opener.postMessage({ 
              type: 'EMAIL_VERIFIED',
              email: email 
            }, window.location.origin);
            
            // Show success message
            showToast.success('Email verified! You can close this tab and continue registration.');
          } else {
            // If on same tab, redirect back
            navigate('/auth/vendor/register?verified=true&email=' + email);
          }
        } catch (error) {
          showToast.error('Verification failed. Please try again.');
        }
      }
    };

    handleVerification();
  }, [status, email, navigate]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center p-5">
              {status === 'success' ? (
                <>
                  <div className="mb-4">
                    <i className="fas fa-check-circle text-success" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="mb-3">Email Verified Successfully!</h3>
                  <p className="text-muted mb-4">
                    You can now return to the registration form and continue with your vendor registration.
                  </p>
                  {window.opener ? (
                    <p className="alert alert-info">
                      You can close this tab and continue your registration in the previous tab.
                    </p>
                  ) : (
                  
                    <button 
                    className="btn btn-primary"
                    onClick={() => {
                      // Save verification status
                      localStorage.setItem('emailVerificationStatus', JSON.stringify({
                        verified: true,
                        email: email
                      }));
                      navigate('/auth/vendor/register?verified=true&email=' + email + '&step=2');
                    }}
                  >
                    Continue Registration
                  </button>
                  )}
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <i className="fas fa-times-circle text-danger" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="mb-3">Verification Failed</h3>
                  <p className="text-muted mb-4">
                    There was a problem verifying your email. Please try again or contact support.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/auth/vendor/register')}
                  >
                    Return to Registration
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationResult;