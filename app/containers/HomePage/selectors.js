import { createSelector } from 'reselect';

const selectHomePageDomain = () => (state) => state.get('homePage');

const makeSelectUser = () => createSelector(
  selectHomePageDomain(),
  (hp) => hp.get('user')
);

export {
  makeSelectUser,
};
