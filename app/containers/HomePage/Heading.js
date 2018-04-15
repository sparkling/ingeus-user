import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const H1 = styled.h1 `
  padding: 1em 0 0.5em;
`;

const Heading = () => (
  <H1>
    <FormattedMessage {...messages.header} />
  </H1>);

export default Heading;
