import React, { Component } from 'react';

export class Conditional extends Component {
    static displayName = Conditional.name;

    render() { return (this.props.enabled ? <div> {this.props.children} </div> : <></>); }
}