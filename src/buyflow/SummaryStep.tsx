import { Link } from 'react-router-dom'
import React from 'react'

interface SummaryStepProps {
  productId: string,
  collectedData: {
    firstName?: string
    lastName?: string
    email: string
    age: number
  },
  isDesignerBuyflow: boolean,
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { collectedData, isDesignerBuyflow, productId } = props;
  
  return (
    <>
      {
        isDesignerBuyflow && (
          <>
            <div>First Name: {collectedData?.firstName}</div>
            <div>Last Name: {collectedData?.lastName}</div>
          </>
        )
      }
      <div>Email: {collectedData?.email}</div>
      <div>Age: {collectedData?.age}</div>
      <br />
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
