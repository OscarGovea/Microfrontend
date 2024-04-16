import React from "react";

export class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerevideStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h2>Ocurrio un error en el MicroFrontEnd, favor de validarlo</h2>;
    }

    return this.props.children;
  }
}
