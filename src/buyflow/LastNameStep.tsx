import React, { useState } from 'react';

import SubmitButton from './SubmitButton';

interface LastNameStepProps {
  cb: (field: string, value: string) => void
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState('');
  
  return (
    <form
      id='lastName-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.cb('lastName', lastName)
      }}>
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

export default LastNameStep;
