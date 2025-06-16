import React from 'react';
import { Trash2, Edit2 } from 'lucide-react';

function Note({ note, onDelete, onEdit }) {
  const { title, content, createdAt } = note;
  
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 line-clamp-1 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-4">{content}</p>
      <div className="border-t border-gray-200 my-3" ></div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">{formattedDate}</p>
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(note)}
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Edit note"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Delete note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note; 