import React, { SyntheticEvent, useState } from 'react';

import SubmitButton from './SubmitButton';
import useAppContext from '../hooks/UseAppContext';

interface LastNameStepProps {
  moveToNextStep: () => void
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState('');
  const { updateData } = useAppContext();

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateData('lastName', lastName);
    props.moveToNextStep();
  }
  
  return (
    <form
      id='lastName-form'
      onSubmit={onFormSubmit}>
      <div>
        Last Name:{' '}
        <input
          autoFocus
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

export default LastNameStep;
