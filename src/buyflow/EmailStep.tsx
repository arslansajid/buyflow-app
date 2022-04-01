import React, { useState } from 'react';

import SubmitButton from './SubmitButton';

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <form
      id='email-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.cb('email', email)
      }}>
      <div>
        Email:{' '}
        <input
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
