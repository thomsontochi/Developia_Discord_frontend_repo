/**
 * Browser-friendly logging utility for React/Laravel application
 * Handles development and production logging with environment awareness
 */

const isDevelopment = import.meta.env.MODE === 'development';

class Logger {
    /**
     * Log error messages with backend integration
     * @param {Error} error - Error object
     * @param {string} context - Context where error occurred
     */
    static async error(error, context = '') {
        const errorData = {
            message: error.message,
            context,
            timestamp: new Date().toISOString(),
            stack: error.stack,
            environment: isDevelopment ? 'development' : 'production'
        };

        // Always log to console in development
        if (isDevelopment) {
            console.error(`[ERROR] ${context}:`, error);
            console.error('Stack:', error.stack);
        }

        // Send to Laravel backend in production
        if (!isDevelopment) {
            try {
                await fetch('/api/logs/error', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(errorData),
                    credentials: 'include'
                });
            } catch (sendError) {
                // Fallback to console if backend logging fails
                console.error('[Logger Service Failed]', sendError);
            }
        }
    }

    /**
     * Log info level messages
     * @param {string} message - Info message
     * @param {Object} data - Additional data to log
     */
    static info(message, data = null) {
        if (isDevelopment) {
            console.log(`[INFO] ${message}`, data);
        }
    }

    /**
     * Log warning level messages
     * @param {string} message - Warning message
     * @param {Object} data - Additional data to log
     */
    static warn(message, data = null) {
        if (isDevelopment) {
            console.warn(`[WARN] ${message}`, data);
        }
    }

    /**
     * Log debug level messages (development only)
     * @param {string} message - Debug message
     * @param {Object} data - Additional data to log
     */
    static debug(message, data = null) {
        if (isDevelopment) {
            console.debug(`[DEBUG] ${message}`, data);
        }
    }

    /**
     * Log API related errors with detailed information
     * @param {Error} error - Error object
     * @param {string} endpoint - API endpoint
     * @param {Object} requestData - Request data
     */
    static apiError(error, endpoint, requestData = {}) {
        const apiErrorData = {
            message: error.message,
            endpoint,
            requestData,
            response: error.response?.data,
            status: error.response?.status,
            timestamp: new Date().toISOString()
        };

        this.error(error, `API Error: ${endpoint}`);
        
        if (isDevelopment) {
            console.error('[API Error Details]:', apiErrorData);
        }
    }
}

// Export convenience methods
export const logError = (error, context) => Logger.error(error, context);
export const logInfo = (message, data) => Logger.info(message, data);
export const logWarn = (message, data) => Logger.warn(message, data);
export const logDebug = (message, data) => Logger.debug(message, data);
export const logApiError = (error, endpoint, requestData) => 
    Logger.apiError(error, endpoint, requestData);

export default Logger;