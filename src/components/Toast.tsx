import React, { useEffect } from 'https://unpkg.com/react@18.2.0/umd/react.development.js';

const Toast = ({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Disappears after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast toast-${type}`}>
            {message}
            <button onClick={onClose} className="toast-close-btn">&times;</button>
        </div>
    );
};

export default Toast;