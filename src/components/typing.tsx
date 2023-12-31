import React from "react";
import Typed from "typed.js";

interface Props {
  strings: Array<string>;
}

export class TypedWelcome extends React.Component<Props> {
  typed: any;
  el: any;
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings }: Props = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 40,
      backSpeed: 40,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}
