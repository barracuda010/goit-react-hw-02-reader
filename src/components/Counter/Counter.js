import React from 'react';
import PropTypes from 'prop-types';
import s from '../Reader/Reader.module.css';

const Counter = ({ index, stroke }) => (
  <p className={s.counter}>
    {index + 1}/{stroke}
  </p>
);
export default Counter;

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
};
