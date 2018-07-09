import React, { Component } from 'react';
import ContentEditable from './ContentEditable';

class WysiwygEditor extends Component {  
  changeText = (event) => {
  	event.preventDefault();
    const {role, style} = event.target.dataset;
    if(typeof style !== 'undefined') {
    	document.execCommand(role, false, style);
    }
    else {
    	document.execCommand(role, false);
    }
  }
  	
  render() {
    return (
  	<div className="wysiwyg-editor">
      <div className="wysiwyg-editor__controls">
        <a href='javascript:void(0);' onClick={this.changeText} data-role='bold'>B</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='italic'>I</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='underline'>U</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='formatBlock' data-style='p'>P</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='formatBlock' data-style='h1'>H1</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='formatBlock' data-style='h2'>H2</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='formatBlock' data-style='h3'>H3</a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='formatBlock'><i className="menu-left"></i></a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='justifycenter'><i className="menu-center"></i></a>
        <a href='javascript:void(0);' onClick={this.changeText} data-role='justifyright'><i className="menu-right"></i></a>
      </div>
      <ContentEditable class='wysiwyg-editor__content' name={this.props.name} onChange={this.props.onChange} />
    </div>
  )
  }
}

export default WysiwygEditor;