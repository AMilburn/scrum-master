import { push } from 'react-router-redux';

export function goToMenu() {
  return dispatch => {
    dispatch(push('/menu'));
  };
}

// export function storeConnection() {

// }

export function goToGame() {
  return dispatch => {
    dispatch(push('/cthulhu'));
  };
}