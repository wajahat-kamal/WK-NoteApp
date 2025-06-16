import React from 'react';
import { X } from 'lucide-react';

function DeleteConfirmationPopup({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-[#0007] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-[90%] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Delete Note</h3>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this note? This action cannot be undone.</p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationPopup; 