import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

const Options = ({ harmless, delicate, offensive, onBadgeClick }) => {

  return (
    <div className="w-100 center-text">
      <Badge onClick={onBadgeClick} id="harmless" color={harmless ? 'primary' : 'secondary'}>Inofensivo / Harmless</Badge>
      <Badge onClick={onBadgeClick} id="delicate" color={delicate ? 'primary' : 'secondary'}>Delicado / Delicate</Badge>
      <Badge onClick={onBadgeClick} id="offensive" color={offensive ? 'primary' : 'secondary'}>Ofensivo / Offensive</Badge>
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
