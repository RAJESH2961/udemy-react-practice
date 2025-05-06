// import { useState, useRef } from "react";
import { useRef, useImperativeHandle, forwardRef } from "react";

function ResultModal({ result, targetTime, onClose }, ref) {
    const dialog = useRef();
  
    useImperativeHandle(ref, () => ({
      open() {
        dialog.current.showModal();
      }
    }));
  
    function handleClose() {
      dialog.current.close();
      onClose(); // Notify parent that modal is closed
    }
  
    return (
      <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong>.</p>
        <p>You stopped the timer with <strong>X seconds left</strong>.</p>
        <form method="dialog" onSubmit={handleClose}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
  
  export default forwardRef(ResultModal);
  