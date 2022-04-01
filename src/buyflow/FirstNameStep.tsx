import React, { useState } from 'react';

import SubmitButton from './SubmitButton';

interface FirstNameStepProps {
  cb: (field: string, value: string) => void
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('');
  
  return (
    <form
      id='firstName-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.cb('firstName', firstName);
      }}>
      <div>
        First Name:{' '}
        <input
          required
          type='text'
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
        />
      </div>
      <br />
      <SubmitButton id='firstName-form' />
    </form>
  )
}

export default FirstNameStep
