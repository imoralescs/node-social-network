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
      text: '',
      html: '',
      errors: {}
    }
    
    componentDidMount() {
      this.props.getPosts();
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps.state.error !== this.props.state.error) {
        this.setState({
          errors : nextProps.state.error.errors
        })
      }

      if(!nextProps.state.auth.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    _onChange = (event) => {
      this.setState({ 
        [event.target.name]: event.target.value 
      });
  }

  _onSubmit = (event) => {
      event.preventDefault();

      const postData = {
        text : this.state.text
      }

      this.props.addPost(postData);
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