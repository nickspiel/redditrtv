'use strict'

import React from 'react';
import VideoElement from '../VideoElement/VideoElement.jsx';

export default React.createClass ({

  displayName: 'VideoList',

  getInitialState: function() {
    return {
      videos: []
    };
  },

  componentDidMount: function () {
    var videos = [];
    
    $.getJSON(this.props.source, {
      format: 'json'
    }).done(function(result) {
      $.each(result.data.children, function(i, item) {
        console.log(item.data.domain);
        if(item.data.domain !== 'self.videos') {
          console.log(item.data);
          videos.push(item.data);
        }
      });

      // Set in state
      this.setState({ videos: videos });
    }.bind(this));
  },

  render() {
    return (
      <div>
        {Object.keys(this.state.videos).map(function(key) {
          return (<VideoElement key={key} url={this.state.videos[key].url} thumbnail={this.state.videos[key].media.oembed.thumbnail_url} provider={this.state.videos[key].domain} />)
        }, this)}
      </div>
    );
  }
});