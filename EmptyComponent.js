import React, { Component } from 'react';

export default class EmptyComponent extends Component {

  constructor (props) {
    super(props);
  }

  removeTemplateElements () {
    let nodes = document.getElementsByTagName('template');
    for ( let i = 0 ; i < nodes.length ; i++ ) {
      nodes[i].parentNode.removeChild(nodes[i]);
    }
  }

  componentDidMount () {
    this.removeTemplateElements();
  }

  render () {
    return (
      <template />
    );
  }

}
