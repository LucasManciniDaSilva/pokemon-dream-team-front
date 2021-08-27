import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg.png';

const schema = Yup.object().shape({
  teamName: Yup.string().required('Required Team Name'),
  firstPokemon: Yup.string().required('Required First Pokémon'),
  secondPokemon: Yup.string().required('Required Second Pokémon'),
  thirdPokemon: Yup.string().required('Required Third Pokémon'),
  fourthPokemon: Yup.string().required('Required Fourth Pokémon'),
  fifthPokemon: Yup.string().required('Required Fifth Pokémon'),
  lastPokemon: Yup.string().required('Required Last Pokémon'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
    teamName,
    firstPokemon,
    secondPokemon,
    thirdPokemon,
    fourthPokemon,
    fifthPokemon,
    lastPokemon,
  }) {
    dispatch(
      signUpRequest(
        teamName,
        firstPokemon,
        secondPokemon,
        thirdPokemon,
        fourthPokemon,
        fifthPokemon,
        lastPokemon
      )
    );
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="teamName" placeholder="Team Name" />
        <Input name="firstPokemon" placeholder="First Pokémon" />
        <Input name="secondPokemon" placeholder="Second Pokémon" />
        <Input name="thirdPokemon" placeholder="Third Pokémon" />
        <Input name="fourthPokemon" placeholder="Fourth Pokémon" />
        <Input name="fifthPokemon" placeholder="Fifth Pokémon" />
        <Input name="lastPokemon" placeholder="Last Pokémon" />
        <button type="submit">Create a New Team</button>
        <Link to="/manage-team">I Already Have a Team </Link>
      </Form>
    </>
  );
}
