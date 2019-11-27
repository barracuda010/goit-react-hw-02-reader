import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ title, text, index }) => (
  <article className={s.publication}>
    <h2>
      {index + 1}.{title}
    </h2>
    <p>{text}</p>
  </article>
);

export default Publication;

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
