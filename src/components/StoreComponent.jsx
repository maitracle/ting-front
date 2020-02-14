import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject(stores => ({
  number: stores.counterStore.number,
  increase: stores.counterStore.increase,
  decrease: stores.counterStore.decrease,
}))
@observer
class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
