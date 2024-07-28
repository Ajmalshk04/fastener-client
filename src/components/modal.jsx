export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="absolute top-16 left-0 w-full flex items-center justify-center bg-opacity-100 z-50">
      <div className="bg-card rounded-lg shadow-lg  w-full">
        <div className="p-4 border-b">{children}</div>
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const ModalHeader = ({ children }) => (
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-bold">{children}</h2>
  </div>
);

export const ModalBody = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const ModalFooter = ({ children }) => (
  <div className="p-4 border-t">{children}</div>
);
