import React, { SyntheticEvent, useState } from 'react';

import SubmitButton from './SubmitButton';
import useAppContext from '../hooks/UseAppContext';

interface EmailStepProps {
  moveToNextStep: () => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('');
  const { updateData } = useAppContext();

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateData('email', email);
    props.moveToNextStep();
  }
  
  return (
    <form
      id='email-form'
      onSubmit={onFormSubmit}>
      <div>
        Email:{' '}
        <input
          autoFocus
          required
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <br />
      <SubmitButton id='email-form' />
    </form>
  )
}

export default EmailStep
