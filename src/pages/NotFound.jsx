import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-md-8">
                    <div className="error-template">
                        <h1 className="display-1">404</h1>
                        <h2 className="display-4">Oops! Page Not Found</h2>
                        <div className="error-details my-4">
                            Sorry, the page you're looking for doesn't exist.
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary me-3">
                                Go Home
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;