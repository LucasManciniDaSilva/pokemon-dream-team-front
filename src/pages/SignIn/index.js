import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import logo from '~/assets/logo.svg.png';

export default function SignIn() {
  const history = useHistory();

  const redirect = () => {
    history.push('/create-team');
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
        <button onClick={redirect}>Create Your Team</button>
        <Link to="/manage-team">Manage your Team</Link>
      </Form>
    </>
  );
}
