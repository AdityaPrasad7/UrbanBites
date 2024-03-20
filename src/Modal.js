import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  width: '90%',
  maxWidth: '600px', // Limit maximum width for responsiveness
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 5,
  left: 5,
  right: 5,
  bottom: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          className='btn bg-danger fs-4 rounded-0 shadow'
          style={{
            position: 'absolute',
            top: '-20px',
            right: '14px',
            color: '#ECECEC',
            fontSize: '0.6rem', // Adjust font size
            padding: "4px 2px"
          }}
          onClick={onClose}
        >
          ✘
        </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
