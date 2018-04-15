import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import FormEntry from './FormEntry';

const SaveButton = styled(Button)`
  margin-top: 1em;
`;

const UserForm = ({ onUpdate, onSave, user }) => (
  <Form>
    <FormEntry
      labelKey="firstName"
      property="firstName"
      user={user}
      onUpdate={onUpdate}
    />
    <FormEntry
      labelKey="lastName"
      property="lastName"
      user={user}
      onUpdate={onUpdate}
    />
    <SaveButton
      color="primary"
      type="submit"
      className="pure-button pure-button-primary"
      onClick={(evt) => onSave(evt, this.props.user)}
    >Save</SaveButton>
  </Form>);

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};


export default UserForm;
