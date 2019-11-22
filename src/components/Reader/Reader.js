import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import s from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    index: 0,
  };

  handleBack = () => {
    this.setState(state => {
      return { index: state.index - 1 };
    });
  };

  handleForward = () => {
    this.setState(state => {
      return { index: state.index + 1 };
    });
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const { title, text } = items[index];
    const stroke = items.length;
    return (
      <div className={s.reader}>
        <Controls
          index={index}
          back={this.handleBack}
          forward={this.handleForward}
          stroke={stroke}
        />
        <Counter index={index} stroke={stroke} />
        <Publication index={index} title={title} text={text} />
      </div>
    );
  }
}
