import * as React from 'react';

import './style.css';

export default class Exception extends React.Component {
  state = {
    error: null,
    info: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div className="error">
          <h1 style={{ color: 'rgb(206, 17, 38)' }}>{error.toString()}</h1>
          <pre style={{ color: '#fff' }}>
            {info.componentStack}
          </pre>
        </div>
      );
    }
    return children;
  }
}
