import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { useAuth } from "../../contexts/AuthContext";
import { showToast } from "../../utility/toast";

const VendorRegistrationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  // =========================================
  // State Management
  // =========================================
  
  // Step tracking
  const [step, setStep] = useState(1);
  const steps = [
    { number: 1, title: "Account Setup", completed: false },
    { number: 2, title: "Store Information", completed: false },
    { number: 3, title: "Payment Details", completed: false },
  ];
  
  // Loading states for each step
  const [stepLoading, setStepLoading] = useState({
    step1: false,
    step2: false,
    step3: false
  });

  // Error handling
  const [error, setError] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  // Email verification
  const [verificationStatus, setVerificationStatus] = useState({
    checking: false,
    verified: false,
    message: "",
  });
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const MAX_VERIFICATION_ATTEMPTS = 12;

  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Account details
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    
    // Step 2: Store details
    store_name: "",
    store_description: "",
    business_category: "",
    address: "",
    store_logo: null,
    
    // Step 3: Contact & Payment
    phone: "",
    payment_details: {
      bank_name: "",
      account_number: "",
      account_holder: "",
    }
  });

  // =========================================
  // Effects
  // =========================================

  // Check for verification from URL params

  // useEffect(() => {
  //   const verified = searchParams.get('verified');
  //   const verifiedEmail = searchParams.get('email');
    
    
  //   if (verified === 'true' && verifiedEmail === formData.email) {
  //     setVerificationStatus({
  //       checking: false,
  //       verified: true,
  //       message: "Email verified successfully!"
  //     });
  //     steps[0].completed = true;
  //     setTimeout(() => setStep(2), 1500);
  //   }
  // }, [searchParams, formData.email]);

  useEffect(() => {
    const verified = searchParams.get('verified');
    const verifiedEmail = searchParams.get('email');
    const stepParam = searchParams.get('step');
    
    // Check localStorage for verification status
    const savedVerification = localStorage.getItem('emailVerificationStatus');
    
    if ((verified === 'true' && verifiedEmail) || savedVerification) {
      const verificationData = savedVerification ? JSON.parse(savedVerification) : { email: verifiedEmail };
      
      setVerificationStatus({
        checking: false,
        verified: true,
        message: "Email verified successfully!"
      });
      
      steps[0].completed = true;
      setStep(2); // Explicitly set to step 2
      
      // Update form email if available
      if (verificationData.email) {
        setFormData(prev => ({
          ...prev,
          email: verificationData.email
        }));
      }
    }
    
    // Clean up localStorage after reading
    localStorage.removeItem('emailVerificationStatus');
  }, [searchParams]);

  // Handle email verification checking
  useEffect(() => {
    let verificationTimer;

    if (verificationStatus.checking && verificationAttempts < MAX_VERIFICATION_ATTEMPTS) {
      verificationTimer = setInterval(async () => {
        try {
          const verified = await AuthService.checkEmailVerification(formData.email);

          if (verified) {
            setVerificationStatus({
              verified: true,
              checking: false,
              message: "Email verified successfully!",
            });
            steps[0].completed = true;
            setTimeout(() => setStep(2), 1500);
            clearInterval(verificationTimer);
            return;
          }

          setVerificationAttempts(prev => prev + 1);

          if (verificationAttempts >= MAX_VERIFICATION_ATTEMPTS - 1) {
            clearInterval(verificationTimer);
            setVerificationStatus({
              checking: false,
              message: "Verification timeout. Please try again or contact support.",
            });
          }
        } catch (error) {
          clearInterval(verificationTimer);
          setVerificationStatus({
            checking: false,
            message: error.status === 401 
              ? "Authentication error. Please try registering again."
              : "Error checking verification status. Please try again.",
          });
        }
      }, 5000);
    }

    return () => {
      if (verificationTimer) clearInterval(verificationTimer);
    };
  }, [verificationStatus.checking, formData.email, verificationAttempts]);

  useEffect(() => {
    // Listen for verification message from popup window
    const handleMessage = (event) => {
      if (event.origin === window.location.origin &&
          event.data.type === 'EMAIL_VERIFIED') {
        setVerificationStatus({
          checking: false,
          verified: true,
          message: "Email verified successfully!"
        });
        steps[0].completed = true;
        setTimeout(() => setStep(2), 1500);
      }
    };
  
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // =========================================
  // Validation Functions
  // =========================================

  const validateStep1 = () => {
    const errors = {};
    if (!formData.full_name) errors.full_name = "Full name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.password) errors.password = "Password is required";
    if (formData.password && formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = errors.password = "Passwords do not match";
    }
    return errors;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.store_name) errors.store_name = "Store name is required";
    if (!formData.store_description) errors.store_description = "Store description is required";
    if (!formData.business_category) errors.business_category = "Business category is required";
    if (!formData.address) errors.address = "Address is required";
    return errors;
  };

  const validateStep3 = () => {
    const errors = {};
    if (!formData.payment_details.bank_name) errors.bank_name = "Bank name is required";
    if (!formData.payment_details.account_number) errors.account_number = "Account number is required";
    if (!formData.payment_details.account_holder) errors.account_holder = "Account holder name is required";
    return errors;
  };

  // Check if can proceed to next step
  const canProceedToNextStep = () => {
    switch(step) {
      case 1:
        return verificationStatus.verified || 
          (formData.full_name && formData.email && formData.password && 
           formData.password === formData.confirmPassword);
      case 2:
        return formData.store_name && formData.business_category && 
               formData.store_description;
      case 3:
        return formData.payment_details.bank_name && 
               formData.payment_details.account_number && 
               formData.payment_details.account_holder;
      default:
        return false;
    }
  };

  // =========================================
  // Event Handlers
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentDetailsChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      payment_details: {
        ...prev.payment_details,
        [field]: value
      }
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        store_logo: file
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setValidationErrors({});

    // Validate current step
    let currentValidationErrors = {};
    switch (step) {
      case 1: currentValidationErrors = validateStep1(); break;
      case 2: currentValidationErrors = validateStep2(); break;
      case 3: currentValidationErrors = validateStep3(); break;
    }

    if (Object.keys(currentValidationErrors).length > 0) {
      setValidationErrors(currentValidationErrors);
      return;
    }

    try {
      if (step === 1) {
        setStepLoading(prev => ({...prev, step1: true}));
        await AuthService.vendorRegisterStep1({
          full_name: formData.full_name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        });
        setVerificationStatus({
          checking: true,
          verified: false,
          message: "Please check your email for verification link",
        });
        showToast.success("Please check your email for verification link");
      } 
      else if (step === 2) {
        setStepLoading(prev => ({...prev, step2: true}));
        await AuthService.vendorRegisterStep2({
          store_name: formData.store_name,
          store_description: formData.store_description,
          business_category: formData.business_category,
          address: formData.address,
          store_logo: formData.store_logo,
        });
        steps[1].completed = true;
        setStep(3);
        showToast.success("Store information saved successfully");
      } 
      else if (step === 3) {
        setStepLoading(prev => ({...prev, step3: true}));
        await AuthService.vendorRegisterStep3({
          payment_details: formData.payment_details
        });
        steps[2].completed = true;
        showToast.success("Registration completed successfully!");
        navigate("/vendor/dashboard");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setStepLoading({step1: false, step2: false, step3: false});
      
      if (err.errors) {
        setValidationErrors(err.errors);
        if (err.message) showToast.error(err.message);
      } else {
        showToast.error(err.message || "Registration failed. Please try again.");
        setError({
          general: err.message || "An error occurred during registration"
        });
      }
    } finally {
      setStepLoading(prev => ({...prev, [`step${step}`]: false}));
    }
  };

  // =========================================
  // Render Helper Functions
  // =========================================

  const renderError = (fieldName) => {
    return (validationErrors[fieldName] || error[fieldName]) && (
      <div className="invalid-feedback d-block">
        {validationErrors[fieldName] || error[fieldName]}
      </div>
    );
  };

  // Step content components
  const renderStep1 = () => (
    <>
      <h5 className="mb-4">Account Information</h5>
      <div className="mb-4">
        <label className="form-label">Full Name</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-user text-primary"></i>
          </span>
          <input
            type="text"
            className={`form-control border-start-0 ${
              validationErrors.full_name || error.full_name ? "is-invalid" : ""
            }`}
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            disabled={loading || verificationStatus.checking}
            required
          />
        </div>
        {renderError("full_name")}
      </div>

      <div className="mb-4">
        <label className="form-label">Email Address</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-envelope text-primary"></i>
          </span>
          <input
            type="email"
            className={`form-control border-start-0 ${
              validationErrors.email || error.email ? "is-invalid" : ""
            }`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="form-label">Password</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text border-end-0 bg-transparent">
              <i className="fas fa-lock text-primary"></i>
            </span>
            <input
              type="password"
              className={`form-control border-start-0 ${
                validationErrors.password || error.password ? "is-invalid" : ""
              }`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <label className="form-label">Confirm Password</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text border-end-0 bg-transparent">
              <i className="fas fa-lock text-primary"></i>
            </span>
            <input
              type="password"
              className={`form-control border-start-0 ${
                validationErrors.confirmPassword || error.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h5 className="mb-4">Store Information</h5>
      <div className="mb-4">
        <label className="form-label">Store Name</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-store text-primary"></i>
          </span>
          <input
            type="text"
            className={`form-control border-start-0 ${
              validationErrors.store_name || error.store_name ? "is-invalid" : ""
            }`}
            name="store_name"
            value={formData.store_name}
            onChange={handleChange}
            required
          />
        </div>
        {renderError("store_name")}
      </div>
  
      <div className="mb-4">
        <label className="form-label">Business Category</label>
        <select
          className={`form-select form-select-lg ${
            validationErrors.business_category || error.business_category ? "is-invalid" : ""
          }`}
          name="business_category"
          value={formData.business_category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="retail">Retail</option>
          <option value="food">Food & Beverage</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="health">Health & Beauty</option>
          <option value="other">Other</option>
        </select>
        {renderError("business_category")}
      </div>
  
      <div className="mb-4">
        <label className="form-label">Store Description</label>
        <textarea
          className={`form-control ${
            validationErrors.store_description || error.store_description ? "is-invalid" : ""
          }`}
          name="store_description"
          value={formData.store_description}
          onChange={handleChange}
          rows="3"
          required
        ></textarea>
        {renderError("store_description")}
      </div>
  
      <div className="mb-4">
        <label className="form-label">Store Logo</label>
        <div className="input-group">
          <input
            type="file"
            className={`form-control ${
              validationErrors.store_logo || error.store_logo ? "is-invalid" : ""
            }`}
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
        {renderError("store_logo")}
      </div>
    </>
  );
  
  const renderStep3 = () => (
    <>
      <h5 className="mb-4">Contact & Payment Details</h5>
      <div className="mb-4">
        <label className="form-label">Phone Number</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-phone text-primary"></i>
          </span>
          <input
            type="tel"
            className={`form-control border-start-0 ${
              validationErrors.phone || error.phone ? "is-invalid" : ""
            }`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {renderError("phone")}
      </div>
  
      <div className="mb-4">
        <label className="form-label">Address</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-map-marker-alt text-primary"></i>
          </span>
          <input
            type="text"
            className={`form-control border-start-0 ${
              validationErrors.address || error.address ? "is-invalid" : ""
            }`}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        {renderError("address")}
      </div>
  
      <div className="mb-4">
        <h6 className="mb-3">Payment Details</h6>
        <div className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className={`form-control form-control-lg ${
                validationErrors.bank_name || error.bank_name ? "is-invalid" : ""
              }`}
              placeholder="Bank Name"
              value={formData.payment_details.bank_name}
              onChange={(e) => handlePaymentDetailsChange("bank_name", e.target.value)}
              required
            />
            {renderError("bank_name")}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control form-control-lg ${
                validationErrors.account_number || error.account_number ? "is-invalid" : ""
              }`}
              placeholder="Account Number"
              value={formData.payment_details.account_number}
              onChange={(e) => handlePaymentDetailsChange("account_number", e.target.value)}
              required
            />
            {renderError("account_number")}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control form-control-lg ${
                validationErrors.account_holder || error.account_holder ? "is-invalid" : ""
              }`}
              placeholder="Account Holder Name"
              value={formData.payment_details.account_holder}
              onChange={(e) => handlePaymentDetailsChange("account_holder", e.target.value)}
              required
            />
            {renderError("account_holder")}
          </div>
        </div>
      </div>
    </>
  );

  // Email verification status component
  const EmailVerificationStatus = () => (
    <div className={`alert ${verificationStatus.verified ? "alert-success" : "alert-info"}`}>
      <div className="d-flex align-items-center">
        {verificationStatus.checking && !verificationStatus.verified && (
          <div className="spinner-border spinner-border-sm me-2" role="status">
            <span className="visually-hidden">Checking verification...</span>
          </div>
        )}
        <div>{verificationStatus.message || "Please check your email for verification link"}</div>
      </div>
    </div>
  );

  // =========================================
  // Main Render
  // =========================================

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                {error.general && (
                  <div className="alert alert-danger" role="alert">
                    {error.general}
                  </div>
                )}

                {step === 1 && verificationStatus.checking && <EmailVerificationStatus />}

                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Vendor Registration</h3>
                  <p className="text-muted">Step {step} of 3</p>
                  <div className="progress" style={{ height: "4px" }}>
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}

                  <div className="d-flex justify-content-between mt-4">
                  {step > 1 && !verificationStatus.verified && (
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg"
                          onClick={() => setStep(step - 1)}
                        >
                          Back
                        </button>
                      )}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg ms-auto"
                      disabled={!canProceedToNextStep() || stepLoading[`step${step}`]}
                    >
                      {stepLoading[`step${step}`] ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                          Loading...
                        </>
                      ) : (
                        step === 3 ? "Complete Registration" : "Continue"
                      )}
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="mb-0 text-muted small">
                      Already have a vendor account?{" "}
                      <Link to="/auth/vendor/login" className="text-decoration-none fw-medium text-primary">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistrationForm;