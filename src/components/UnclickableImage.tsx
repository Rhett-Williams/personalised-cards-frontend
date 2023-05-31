import React, { useState } from 'react';
import Modal from 'react-modal';

type Props = {
  image: string
  className: string
}
const UnclickableImage = ({image, className}: Props) => {
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

return (
    <div>
    <img className={className} src={image} alt="Your Image" onClick={openModal} draggable="false" />
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {/* Your enlarged image view */}
        <img className={className} src={image} alt="Your Image" />
    </Modal>
    </div>
);
};

export default UnclickableImage;