import * as React from 'react';

import './style.css';

export default class ProdException extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div className="prod-error">
          <h1>Oops, it looks like you've catched an error</h1>
          <p>Please, wait until we fix it</p>
        </div>
      );
    }
    return children;
  }
}
