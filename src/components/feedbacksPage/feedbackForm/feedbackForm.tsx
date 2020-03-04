import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import './feedackForm.css';

export const Feedback = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Оценить продавца Mebel-online</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="feedback">
          <div className="feedback-row">
            <div className="feedback-col">Рейтинг</div>
            <div className="feedback-col"></div>
          </div>

          <textarea
            name="text"
            placeholder="Отзыв о продавце"
            cols={100}
            rows={5}
            value={''}
            onChange={(e) => {}}
          ></textarea>
          <button
            className="send-feedback-button"
            onClick={() => props.onHide()}
          >
            Добавить отзыв
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
