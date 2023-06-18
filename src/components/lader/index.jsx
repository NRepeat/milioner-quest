import React, { Component } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';

const winningsData = [100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 75000,100000, 500000, 1000000];

class Lader extends Component {
  render() {
    const { step } = this.props;

    const moneyLadder = winningsData.map((money, index) => {
      const CN = classNames(style.default, { [style.stage]: index === step });
      return <p key={index} className={CN}>{money}</p>;
    });

    return <div>{moneyLadder}</div>;
  }
}

export default Lader;
