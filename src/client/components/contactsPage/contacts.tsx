import * as React from 'react';
import './contacts.css';
import { AskQuestion } from './askQuestionForm/askQuestionForm';

export const Contacts = () => {
  const [showQuestionForm, setShowQuestionForm] = React.useState<boolean>(
    false
  );

  return (
    <div className="contact-info">
      <h3>Контактная информация компании Mebel-online</h3>
      <table className="">
        <tbody>
          <tr>
            <td>Название</td>
            <td></td>
          </tr>
          <tr>
            <td>Контактное лицо</td>
            <td></td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td></td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td></td>
          </tr>
          <tr>
            <td>Email</td>
            <td></td>
          </tr>
          <tr>
            <td>Год основания</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="contacts-buttons">
        <button onClick={() => setShowQuestionForm(true)}>Написать нам</button>
        {/*<button>График работы</button>*/}
      </div>
      <AskQuestion
        show={showQuestionForm}
        onHide={() => setShowQuestionForm(false)}
      />
    </div>
  );
};
