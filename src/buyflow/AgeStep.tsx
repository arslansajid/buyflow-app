import React, { SyntheticEvent, useState } from 'react'

import SubmitButton from './SubmitButton';
import useAppContext from '../hooks/UseAppContext';

interface AgeStepProps {
  moveToNextStep: () => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  const { updateData } = useAppContext();

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (age <= 0) {
      alert('Age should be greater than 0');
    } else {
      updateData('age', age);
      props.moveToNextStep();
    }
  }

  return (
    <form
      id='age-form'
      onSubmit={onFormSubmit}>
      <div>
        Age:{' '}
        <input
          autoFocus
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
