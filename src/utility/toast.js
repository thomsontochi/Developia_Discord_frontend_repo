import { toast } from 'react-toastify';



// const toastConfig = {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     style: {
//         background: '#fff',
//         color: '#333',
//         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//         borderRadius: '8px',
//         padding: '16px',
//         fontSize: '14px'
//     }
// };


const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true, // Hide progress bar for cleaner look
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
        background: '#fff',
        color: '#333',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: '6px',
        padding: '8px 12px', // Reduced padding
        fontSize: '13px', // Smaller font size
        maxWidth: '260px', // Limit maximum width
        minHeight: '40px', // Minimum height
    },
    className: 'custom-toast', // Add custom class for additional styling
};


export const showToast = {
    success: (message) => toast.success(message, {
        ...toastConfig,
        icon: '✅'
    }),
    error: (message) => toast.error(message, {
        ...toastConfig,
        icon: '❌'
    }),
    info: (message) => toast.info(message, {
        ...toastConfig,
        icon: 'ℹ️'
    }),
    warning: (message) => toast.warning(message, {
        ...toastConfig,
        icon: '⚠️'
    }),
    auth: (message) => toast(message, {
        ...toastConfig,
        icon: '🛍️'
    })
};