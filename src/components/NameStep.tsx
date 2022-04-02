import React, { SyntheticEvent, useState } from 'react';

import SubmitButton from './SubmitButton';
import useAppContext from "../hooks/UseAppContext";

interface FirstNameStepProps {
  moveToNextStep: () => void
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { updateData } = useAppContext();

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateData('firstName', firstName);
    updateData('lastName', lastName);
    props.moveToNextStep();
  }

  return (
    <form
      id='firstName-form'
      onSubmit={onFormSubmit}>
      <div>
        First Name:{' '}
        <input
          autoFocus
          required
          type='text'
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          value={firstName}
        />
      </div>
      <br />
      <div>
        Last Name:{' '}
        <input
          required
          type='text'
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
        ></input>
      </div>
      <br />
      <SubmitButton id='firstName-form' />
    </form>
  )
}

export default FirstNameStep
