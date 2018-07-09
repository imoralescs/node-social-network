import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'

class ContentEditable extends Component {
	shouldComponentUpdate(nextProps) {
  	return nextProps.html !== findDOMNode(this).innerHTML;
  }
  
  emitChange() {
  	let html = findDOMNode(this).innerHTML;
    if(this.props.onChange && html !== this.lastHtml) {
    	this.props.onChange({
      	target: {
        	value: html
        }
      });
    }
    this.lastHtml = html;
  }
  
	render() {
  	return(
    	<div 
        className={this.props.class}
        onInput={this.emitChange.bind(this)}
        onBlur={this.emitChange.bind(this)}
        contentEditable
        suppressContentEditableWarning="true"
        dangerouslySetInnerHTML={{__html: this.props.html}}>
        </div>)
  }
}

export default ContentEditable;