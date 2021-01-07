import React from 'react';
import utils from '../math-utils';
import PropTypes from 'prop-types';

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starId) => (
        <div key={starId} className='star' />
      ))}
    </>
  );
};

StarsDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};

export default StarsDisplay;
