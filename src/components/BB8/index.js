import React from 'react';

import './style.css';

export const HEIGHT = 165;
export const LEFT = 100;
export const WIDTH = 132;
export const INITIAL_POSITION = -HEIGHT / 2;

export default class BB8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: !props.end,
      up: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.box !== this.props.box) {
      this.setState({
        up: Boolean(nextProps.box && !nextProps.box.isTop),
      });
    }
    if (nextProps.end) {
      this.setState({
        move: false,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.box !== this.props.box ||
      nextState.up !== this.state.up ||
      nextState.move !== this.state.move ||
      nextProps.end !== this.props.end
    );
  }

  componentDidUpdate() {
    const isCollision =
      this.props.box &&
      ((!this.props.box.isTop && !this.state.up) ||
        (this.props.box.isTop && this.state.up));
    if (isCollision) {
      this.props.onCollision();
    }
  }

  render() {
    const { move, up } = this.state;
    const { box } = this.props;
    return (
      <div
        className={`droid ${move ? 'move' : ''}`}
        style={{
          top: up
            ? `${INITIAL_POSITION - box.size}px`
            : `${INITIAL_POSITION}px`,
        }}
      >
        <div className="droid-head">
          <div className="droid-head__eye" />
          <div className="droid-head__eye--small" />
          <div className="droid-head__eye--tiny" />
        </div>
        <div className="droid-neck" />
        <div className="droid-body">
          <div className="droid-body__panel--left" />
          <div className="droid-body__panel--left-rotate" />
          <div className="droid-body__panel-decor" />
          <div className="droid-body__panel--center" />
          <div className="droid-body__panel--center-rotate" />
          <div className="droid-body__panel--right" />
          <div className="droid-body__panel--right-rotate" />
        </div>
      </div>
    );
  }
}
