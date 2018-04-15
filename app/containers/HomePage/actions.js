import {
  LOAD_USER,
  SAVE_USER,
  UPDATE_USER,
} from './constants';

export function loadUser(userId) {
  return {
    type: LOAD_USER,
    userId,
  };
}

export function saveUser(user, userId) {
  return {
    type: SAVE_USER,
    user,
    userId,
  };
}

export function updateUser(property, value) {
  return {
    type: UPDATE_USER,
    property,
    value,
  };
}
