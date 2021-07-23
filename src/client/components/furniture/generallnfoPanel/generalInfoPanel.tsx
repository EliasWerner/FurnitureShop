import * as React from 'react';
import './generalInfoPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GeneralInfoPanel = () => {
  return (
    <div className="general-info-panel">
      <p>
        <FontAwesomeIcon icon={['fas', 'reply']} />
      </p>
      <p>
        <FontAwesomeIcon icon={['fas', 'credit-card']} />
      </p>
      <p>
        <FontAwesomeIcon icon={['fas', 'clock']} />
      </p>
      <p>
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
      </p>
    </div>
  );
};
