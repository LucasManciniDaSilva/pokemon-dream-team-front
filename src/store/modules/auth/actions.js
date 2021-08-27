export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(
  teamName,
  firstPokemon,
  secondPokemon,
  thirdPokemon,
  fourthPokemon,
  fifthPokemon,
  lastPokemon
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      teamName,
      firstPokemon,
      secondPokemon,
      thirdPokemon,
      fourthPokemon,
      fifthPokemon,
      lastPokemon,
    },
  };
}

export function getTeam(teamName) {
  return {
    type: '@auth/GET_TEAM',
    payload: {
      teamName,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
