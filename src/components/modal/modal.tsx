import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import ReactStars from "react-stars";

import { useInfoStore } from "@/store";

const MyModal = () => {
  const { modal, setModal, currentFood } = useInfoStore();

  const handleClose = () => {
    setModal(false);
  };


  return (
    <Modal
      show={modal}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{currentFood.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <div className="image-container">
          <Image
            className="img-contain rounded"
            src={currentFood?.image}
            alt={`Taom nomi ${currentFood.name}`}
            width={500}
            height={500}
          />
        </div>
        <div className="w-100 d-flex flex-column text-start mt-3">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{currentFood.name}</span>
            <span className="text-primary">{currentFood.price}</span>
          </h5>
          <div className="d-flex justify-content-between">
            <small className="fst-italic">{currentFood.desc}</small>
            <ReactStars
              edit={false}
              count={5}
              value={currentFood.vote}
              color2={"#f8cc1b"}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
