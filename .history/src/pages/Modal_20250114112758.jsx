import React from 'react';

const Modal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h3>Sign in with Twitter to obtain your verification code</h3>
      </div>
    </div>
  );
};

export default Modal;
