import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VendorRegisterForm = () => {
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
      monday: { open: '09:00', close: '17:00' },
      tuesday: { open: '09:00', close: '17:00' },
      wednesday: { open: '09:00', close: '17:00' },
      thursday: { open: '09:00', close: '17:00' },
      friday: { open: '09:00', close: '17:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '09:00', close: '17:00' }
    },
    store_logo: null
  });

  const businessCategories = [
    'Retail',
    'Electronics',
    'Fashion',
    'Food & Beverage',
    'Health & Beauty',
    'Home & Garden',
    'Sports & Outdoor',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      store_logo: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Vendor Registration submitted', formData);
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Register as a Vendor</h3>
                  <p className="text-muted">Create your vendor account to start selling</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-4">
                    <h5 className="mb-3">Personal Information</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Store Information */}
                  <div className="mb-4">
                    <h5 className="mb-3">Store Information</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Store Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="store_name"
                          value={formData.store_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Business Category</label>
                        <select
                          className="form-select"
                          name="business_category"
                          value={formData.business_category}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Category</option>
                          {businessCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Store Description</label>
                      <textarea
                        className="form-control"
                        name="store_description"
                        value={formData.store_description}
                        onChange={handleChange}
                        rows="3"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Business Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Store Logo</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="mb-4">
                    <h5 className="mb-3">Account Information</h5>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 btn-lg mb-4">
                    Register as Vendor
                  </button>

                  <div className="text-center">
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

export default VendorRegisterForm;