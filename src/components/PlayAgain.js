import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = (props) => (
  <div className='game-done'>
    <div
      className='message'
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);
PlayAgain.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PlayAgain;
