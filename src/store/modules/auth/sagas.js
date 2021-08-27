import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      teamName,
      firstPokemon,
      secondPokemon,
      thirdPokemon,
      fourthPokemon,
      fifthPokemon,
      lastPokemon,
    } = payload;

    yield call(api.post, 'team', {
      teamName,
      firstPokemon,
      secondPokemon,
      thirdPokemon,
      fourthPokemon,
      fifthPokemon,
      lastPokemon,
    });

    toast.success('Pokémon Team Create Successfully');

    history.push('/');
  } catch (err) {
    toast.error('Error to create your Pokémon Team. Verify your pokémons');

    yield put(signFailure());
  }
}

export function* getTeam({ payload }) {
  try {
    const { teamName } = payload;

    yield call(api.get, `team/${teamName}`, {});

    toast.success(`${teamName} accessed`);

    history.push('/');
  } catch (err) {
    toast.error('Error to get Pokémon Team');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/GET_TEAM', getTeam),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
