import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VendorRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    store_name: '',
    store_description: '',
    business_category: '',
    address: '',
    business_hours: {
      monday: { open: '09:00', close: '17:00', isOpen: true },
      tuesday: { open: '09:00', close: '17:00', isOpen: true },
      wednesday: { open: '09:00', close: '17:00', isOpen: true },
      thursday: { open: '09:00', close: '17:00', isOpen: true },
      friday: { open: '09:00', close: '17:00', isOpen: true },
      saturday: { open: '09:00', close: '17:00', isOpen: false },
      sunday: { open: '09:00', close: '17:00', isOpen: false }
    },
    payment_details: {
      bank_name: '',
      account_number: '',
      account_holder: ''
    },
    store_logo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBusinessHoursChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      business_hours: {
        ...prev.business_hours,
        [day]: {
          ...prev.business_hours[day],
          [field]: field === 'isOpen' ? !prev.business_hours[day].isOpen : value
        }
      }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    console.log('Registration submitted', formData);
  };

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
            className="form-control border-start-0"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Email Address</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-envelope text-primary"></i>
          </span>
          <input
            type="email"
            className="form-control border-start-0"
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
              className="form-control border-start-0"
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
              className="form-control border-start-0"
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
            className="form-control border-start-0"
            name="store_name"
            value={formData.store_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Business Category</label>
        <select
          className="form-select form-select-lg"
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
      </div>

      <div className="mb-4">
        <label className="form-label">Store Description</label>
        <textarea
          className="form-control"
          name="store_description"
          value={formData.store_description}
          onChange={handleChange}
          rows="3"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="form-label">Store Logo</label>
        <div className="input-group">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
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
            className="form-control border-start-0"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Address</label>
        <div className="input-group input-group-lg">
          <span className="input-group-text border-end-0 bg-transparent">
            <i className="fas fa-map-marker-alt text-primary"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <h6 className="mb-3">Payment Details</h6>
        <div className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Bank Name"
              value={formData.payment_details.bank_name}
              onChange={(e) => handlePaymentDetailsChange('bank_name', e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Account Number"
              value={formData.payment_details.account_number}
              onChange={(e) => handlePaymentDetailsChange('account_number', e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Account Holder Name"
              value={formData.payment_details.account_holder}
              onChange={(e) => handlePaymentDetailsChange('account_holder', e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Vendor Registration</h3>
                  <p className="text-muted">Step {step} of 3</p>
                  
                  {/* Progress Bar */}
                  <div className="progress" style={{ height: '4px' }}>
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}

                  <div className="d-flex justify-content-between mt-4">
                    {step > 1 && (
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
                    >
                      {step === 3 ? 'Complete Registration' : 'Continue'}
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="mb-0 text-muted small">
                      Already have a vendor account?{' '}
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