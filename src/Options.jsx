import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Options = ({ harmless, delicate, offensive, onBadgeClick }) => {

  return (
    <div
      className="center-text row text-center"
      style={{
        height: '8vh',
        padding: 0,
        margin: '0'
      }}
    >
      <div
        className="col"
        onClick={onBadgeClick}
        id="harmless"
        style={{
          background: harmless ? 'linear-gradient(90deg, #cfecd0, #ffc5ca)' : '',
          color: harmless ? '#fff' : '#222',
          ':after': {
            content: "",
            display: 'inline-block',
            width: '100%'
          },
        }}
      >
        <span className="text-uppercase">
          Inofensivo<br />
          Harmless
        </span>
      </div>
      <div
        className="col"
        onClick={onBadgeClick}
        id="delicate"
        style={{
          borderRight: '1px solid #ddd',
          borderLeft: '1px solid #ddd',
          background: delicate ? 'linear-gradient(90deg, #ffc5ca, #cfecd0)' : '',
          color: delicate ? '#fff' : '#222',
          ':after': {
            content: "",
            display: 'inline-block',
            width: '100%'
          },
        }}
      >
        <span className="text-uppercase">
          Delicado<br />
          Delicate
        </span>
      </div>
      <div
        className="col"
        onClick={onBadgeClick}
        id="offensive"
        style={{
          background: offensive ? 'linear-gradient(90deg, #cfecd0, #ffc5ca)' : '',
          color: offensive ? '#fff' : '#222',
          ':after': {
            content: "",
            display: 'inline-block',
            width: '100%'
          },
        }}
      >
        <span className="text-uppercase">
          Ofensivo<br />
          Offensive
        </span>
      </div>
    </div>
  );
};

Options.propTypes = {
  harmless: PropTypes.bool.isRequired,
  delicate: PropTypes.bool.isRequired,
  offensive: PropTypes.bool.isRequired,
  onBadgeClick: PropTypes.func.isRequired,
};

export default Options;
