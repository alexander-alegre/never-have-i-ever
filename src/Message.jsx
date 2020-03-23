import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ statement, getStatement }) => {
  return (
    <div className="w-100 text-center border">
      <h1 style={{ fontSize: 100, height: '45vh' }} onClick={getStatement}>{statement}</h1>
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
