import React from "react";

class CounterWithClass extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
       Counter from class: {count}
      </button>
    );
  }
}

export default CounterWithClass;
