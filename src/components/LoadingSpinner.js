import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';


const LoadingSpinner = ({mensagem}) => {
  return (
    <div className="loading-container">
      <AiOutlineLoading className="loading-icon" />
      <p className="loading-text">{mensagem}</p>
    </div>
  );
};

export default LoadingSpinner;