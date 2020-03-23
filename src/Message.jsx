import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ statement, getStatement }) => {
  return (
    <div
      className="text-center border"
      style={{ 
          height: '45vh',
          width: '100vw',
          position: 'relative',
          ':after': {
            content: '',
            display: 'inline-block',
            width: '100%'
          },
       }}
    >
      <p
        onClick={getStatement}
        style={{
          width: '100%',
          height: '22.5vh',
          position: 'absolute',
          top: '22.5vh',
          bottom: '22.5vh',
          padding: 0,
          margin: 0,
          fontFamily: 'Bellota',
        }}
      >
        {statement}
      </p>
    </div>
  );
};

Message.propTypes = {
  getStatement: PropTypes.func.isRequired,
  statement: PropTypes.string,
};

Message.defaultProps = {
  statement: 'Click to start...',
};

export default Message;
