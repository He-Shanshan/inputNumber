/* eslint-disable react/jsx-indent-props */
import React, { Component } from 'react';

function App() {
  const [value, defaultValue] = ['aaa', 'aaa'];
  return (
    <div>
      <InputNumber value={value} onChange={(e) => {}} />{' '}
      <InputNumber defaultValue={defaultValue} onChange={(e) => {}} />{' '}
    </div>
  );
}
class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      defaultValue: props.defaultValue,
    };
  }

  handleChange(e) {
    const changeValue = /^\d+$/.test(e.target.value) ? e.target.value : '';
    this.setState({
      value: changeValue,
    });
  }
  format(arg) {
    this.inputref.value = /^\d+$/.test(arg.target.value)
      ? arg.target.value
      : '';
  }

  render() {
    if (this.props.value) {
      return (
        <input value={this.state.value} onChange={e => this.handleChange(e)} />
      );
    }
    return (
      <input
        defaultValue={this.state.defaultValue}
        onChange={e => this.format(e)}
        ref={instance => (this.inputref = instance)}
      />
    );
  }
}

export default App;
