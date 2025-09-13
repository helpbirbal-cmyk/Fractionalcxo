// components/test-audit-modal.jsx
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function TestAuditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-red-500 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 border-4 border-yellow-500">
          <h2 className="text-white text-2xl font-bold">TEST MODAL - CAN YOU SEE THIS?</h2>
          <p className="text-white mt-4">If you can see this red box, modals are working!</p>
          <button
            onClick={onClose}
            className="mt-4 bg-white text-red-500 px-4 py-2 rounded font-semibold"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
