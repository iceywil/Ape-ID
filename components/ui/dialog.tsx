import React, { ReactNode } from 'react';

// Define the types for the props
interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        {children}
        <button onClick={() => onOpenChange(false)} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

// Define the types for the children prop
interface ChildrenProps {
  children: ReactNode;
}

export const DialogContent: React.FC<ChildrenProps> = ({ children }) => <div>{children}</div>;
export const DialogHeader: React.FC<ChildrenProps> = ({ children }) => <div className="mb-4">{children}</div>;
export const DialogTitle: React.FC<ChildrenProps> = ({ children }) => <h2 className="text-2xl">{children}</h2>; 