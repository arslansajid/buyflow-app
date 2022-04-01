import React, { useState } from 'react'

import SubmitButton from './SubmitButton';

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <form
      id='age-form'
      onSubmit={(e) => {
        e.preventDefault();
        if(age <= 0) {
          alert('Age should be greater than 0');
        } else {
          props.cb('age', age);
        }
      }}>
      <div>
        Age:{' '}
        <input
          required
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <br />
      <SubmitButton id='age-form' />
    </form>
  )
}

export default AgeStep
