import React from 'react';
import PropTypes from 'prop-types';
import s from '../Reader/Reader.module.css';

const Controls = ({ back, forward, index, stroke }) => (
  <section className={s.controls}>
    <button
      onClick={back}
      className={s.button}
      disabled={index === 0}
      type="button"
    >
      Назад
    </button>
    <button
      onClick={forward}
      className={s.button}
      disabled={index === stroke - 1}
      type="button"
    >
      Вперед
    </button>
  </section>
);

export default Controls;
Controls.propTypes = {
  back: PropTypes.func.isRequired,
  forward: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
};
