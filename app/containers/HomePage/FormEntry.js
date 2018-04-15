import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import messages from './messages';

const FormEntry = ({ labelKey, property, user, onUpdate }) => (
  <FormGroup row>
    <Label for={property} sm={2}><FormattedMessage {...messages[labelKey]} /></Label>
    <Col sm={6}>
      <Input
        type="text"
        name={property}
        id={property}
        value={user.get(property) || ''}
        onChange={(evt) => onUpdate(evt, property)}
      />
    </Col>
  </FormGroup>);

FormEntry.propTypes = {
  labelKey: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default FormEntry;
