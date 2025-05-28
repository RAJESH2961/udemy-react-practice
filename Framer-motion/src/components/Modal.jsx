import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
export default function Modal({ title, children, onClose }) {

  // const hiddentAnimationState = {opacity: 0, y: 30}
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
      variants={{
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden" 
      animate="visible"
      // exit animaitons must be enclosed with AnimationPresence component see in header.jsx
      exit="hidden" 
      open 
      className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
