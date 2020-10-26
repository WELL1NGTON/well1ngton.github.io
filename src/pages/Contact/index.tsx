import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Gmail, Microsoftoutlook, Whatsapp, Telegram } from '@icons-pack/react-simple-icons';

const Contact: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-3">
        <p>
          Rua Sampaio Bueno, 935 - Jaú/SP
          <br />
          <Whatsapp color="#25D366" /> &nbsp;
          <Telegram color="#2CA5E0" />
          &nbsp;(14) 98190-3527
          <br />
          <a href="mailto:wellingtonmassola@gmail.com">
            <Gmail color="#D14836" />
            &nbsp;wellingtonmassola@gmail.com
          </a>
          <br />
          <a href="mailto:wellingtonmassola@outlook.com">
            <Microsoftoutlook color="#0078D4" />
            &nbsp;wellingtonmassola@outlook.com
          </a>
        </p>
      </Jumbotron>
    </>
  );
};

export default Contact;
