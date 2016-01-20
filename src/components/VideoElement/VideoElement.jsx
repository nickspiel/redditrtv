'use strict'

// TODO work out how to package and use these properly (index.jsx maybe?)
// TODO hook in css modules

import React from 'react';

export default React.createClass ({

  displayName: 'VideoElement',

  getInitialState() {
    return {
      title: '',
      url: '',
      thumbnail: '',
      provider: ''
    };
  },

  render() {
    return (
      <div>
      <a href={this.props.url}>
        <image src={this.props.thumbnail} alt={this.props.title} />
        <p>{this.props.provider}</p>
      </a>
      </div>
    );
  }
});