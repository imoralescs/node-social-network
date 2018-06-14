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
      email: '',
      password: '',
      errors: {}
    }
    
    componentDidMount() {
      if(this.props.state.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps.state.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
      
      if(nextProps.state.errors !== this.state.errors) {
        this.setState({
          errors : nextProps.state.auth.errors
        })
      }
    }
    
    _onSubmit = (event) => {
      event.preventDefault();
      
      const user = {
        email: this.state.email,
        password: this.state.password,
      }
      
      this.props.loginUser(user);
    }
    
    _onChange = (event) => {
      this.setState({ 
        [event.target.name]: event.target.value 
      });
    }
    
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          _onChange={this._onChange}
          _onSubmit={this._onSubmit}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);