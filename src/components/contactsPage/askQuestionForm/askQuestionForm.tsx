import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import './askQuestionForm.css';

export const AskQuestion = (props: any) => {
  const [questionText, setQuestionText] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('+375');

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Задайте вопрос продавцу</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="question">
          <textarea
            name="text"
            placeholder="Напишите текст обращения"
            cols={100}
            rows={5}
            value={questionText}
            onChange={(e) => {
              setQuestionText(e.target.value);
            }}
          ></textarea>
          <div className="email-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="phone-form">
            <input
              type="tel"
              value={phone}
              pattern="+375[0-9]{2}[0-9]{7}"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
            <h6>
              Оставьте свой номер телефона, если хотите, чтобы с вами связались
              как можно скорее. Пример: +375294911911
            </h6>
          </div>
          <button
            className="send-question-button"
            onClick={() => props.onHide()}
          >
            Отправить
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
