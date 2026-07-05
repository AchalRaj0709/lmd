import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export default function ToastContainer({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type} show`}>
          {toast.type === 'success' ? (
            <CheckCircle2 style={{ width: '16px', height: '16px' }} />
          ) : (
            <Info style={{ width: '16px', height: '16px' }} />
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
