import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ statement, statementSpanish, getStatement }) => {
  return (
    <div className="w-100 text-center">
      <h1 style={{ fontSize: 100, color: 'tomato' }} className="title" onClick={getStatement}>{statement}</h1>
      <hr/>
      <h1 style={{ fontSize: 100, color: 'lightblue' }} className="title" onClick={getStatement}>{statementSpanish}</h1>
    </div>
  );
};

Message.propTypes = {
  getStatement: PropTypes.func.isRequired,
  statement: PropTypes.string,
  statementSpanish: PropTypes.string,
};

Message.defaultProps = {
  statement: 'Click to start...',
  statementSpanish: 'Click to start...'
};

export default Message;
