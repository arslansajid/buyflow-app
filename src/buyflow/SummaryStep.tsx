import { Link } from 'react-router-dom'
import React from 'react'
import useAppContext from '../hooks/UseAppContext';

interface SummaryStepProps {
  productId: string,
  isDesignerBuyflow: boolean,
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { isDesignerBuyflow, productId } = props;
  const { data, resetData } = useAppContext();
  
  return (
    <>
      {
        isDesignerBuyflow && (
          <>
            <div>First Name: {data?.firstName}</div>
            <div>Last Name: {data?.lastName}</div>
          </>
        )
      }
      <div>Email: {data?.email}</div>
      <div>Age: {data?.age}</div>
      <br />
      <div>
        <Link to={`/purchased=${productId}`}>
          <button onClick={() => resetData()}>Purchase</button>
        </Link>
      </div>
    </>
  )
}

export default SummaryStep
