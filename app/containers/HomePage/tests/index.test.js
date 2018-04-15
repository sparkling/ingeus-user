import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import LanguageProvider from '../../LanguageProvider';
import { translationMessages } from '../../../i18n';
import HomePage from '../index';
import messages from '../messages';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <HomePage />
        </LanguageProvider>
      </Provider>
    );
    console.log(renderedComponent.debug());
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
