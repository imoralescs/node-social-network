import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function handlers(WrappedComponent) {
  return class extends React.Component { 
    state = {
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '2001-05-05',
        to: '2001-05-05',
        current: false,
        description: '',
        errors: {},
        disabled: false
    } 
    
    componentWillReceiveProps(nextProps) {      
      if(nextProps.state.error !== this.props.state.error) {
        this.setState({
          errors : nextProps.state.error.errors
        })
      }
    }

    _onChange = (event) => {
        this.setState({ 
          [event.target.name]: event.target.value 
        });
    }

    _onCheckboxChange = (event) => {
      this.setState({
        current: event.target.checked
      });
    }

    _onSubmit = (event) => {
        event.preventDefault();
        const educationData = {
          school: this.state.school,
          degree: this.state.degree,
          fieldofstudy: this.state.fieldofstudy,
          from: this.state.from,
          to: this.state.to,
          current: this.state.current,
          description: this.state.description
        }
        this.props.addEducation(
          educationData, 
          this.props.history
        );
    }
        
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          _onChange={this._onChange}
          _onSubmit={this._onSubmit}
          _onCheckboxChange={this._onCheckboxChange}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);