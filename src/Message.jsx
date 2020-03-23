import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ statement, getStatement }) => {
  return (
    <div className="text-center border">
      <h1
        onClick={getStatement}
        style={{
          height: '45vh',
          width: '100vw',
          ':after': {
            content: "",
            display: 'inline-block',
            width: '100%'
          },
        }}
      >
        {statement}
      </h1>
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
