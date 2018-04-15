import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { Container } from 'reactstrap';
import UserForm from './UserForm';
import Heading from './Heading';
import { makeSelectUser } from './selectors';
import { loadUser, updateUser, saveUser } from './actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { hoverCard: 'none' };
  }

  componentDidMount() {
    this.props.onPageLoad();
  }

  /* eslint-disable jsx-ally/label-has-for */
  render() {
    return (
      <Container>
        <Heading />
        <UserForm
          user={this.props.user}
          onUpdate={this.props.onUpdate}
          onSave={this.props.onSave}
        />
      </Container>
    );
  }
}


HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  onPageLoad: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPageLoad: () => {
      dispatch(loadUser(ownProps.match.params.id));
    },
    onUpdate: (evt, property) => {
      if (evt && evt.preventDefault) evt.preventDefault();
      dispatch(updateUser(property, evt.target.value));
    },
    onSave: (evt, user) => {
      if (evt && evt.preventDefault) evt.preventDefault();
      dispatch(saveUser(user, ownProps.match.params.id));
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
