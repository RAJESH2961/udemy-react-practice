import { useContext, useRef, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const [scope, animate] = useAnimate();
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    let hasError = false;

    if (!challenge.title.trim()) {
      await animate(title.current, { x: [-10, 10, -6, 6, 0] }, { duration: 0.3 });
      hasError = true;
    }

    if (!challenge.description.trim()) {
      await animate(description.current, { x: [-10, 10, -6, 6, 0] }, { duration: 0.3 });
      hasError = true;
    }

    if (!challenge.deadline.trim()) {
      await animate(deadline.current, { x: [-10, 10, -6, 6, 0] }, { duration: 0.3 });
      hasError = true;
    }

    if (!challenge.image) {
      hasError = true;
      // Optionally, shake the image list
      await animate('#new-challenge-images', { x: [-10, 10, -6, 6, 0] }, { duration: 0.3 });
    }

    if (hasError) return;

    addChallenge(challenge);
    onDone();
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul
          id="new-challenge-images"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {images.map((image) => (
            <motion.li
              key={image.alt}
              className={selectedImage === image ? 'selected' : ''}
              onClick={() => handleSelectImage(image)}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: [1] },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img {...image} alt={image.alt} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button type="submit">Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
