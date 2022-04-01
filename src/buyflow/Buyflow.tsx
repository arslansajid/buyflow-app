import { BuyflowSteps, ProductIds } from './Buyflow.types';
import React, { useEffect, useMemo, useState } from 'react';

import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import FirstNameStep from './FirstNameStep';
import LastNameStep from './LastNameStep';
import SummaryStep from './SummaryStep';

interface BuyflowProps {
  productId: ProductIds
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { productId } = props;
  const isDesignerBuyflow = useMemo(() => productId === ProductIds.desIns, [productId]);
  
  const [currentStep, setStep] = useState(BuyflowSteps.email);
  const [collectedData, updateData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  });

  useEffect(() => {
    if(isDesignerBuyflow) {
      setStep(BuyflowSteps.firstName)
    }
  }, [isDesignerBuyflow])
  
  const getStepCallback = (nextStep: BuyflowSteps) => (field: string, value: string | number) => {
    updateData(prevState => ({
      ...prevState,
      [field]: value
    }));
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {(currentStep === 'firstName' && <FirstNameStep cb={getStepCallback(BuyflowSteps.lastName)} />) ||
      (currentStep === 'lastName' && <LastNameStep cb={getStepCallback(BuyflowSteps.email)} />) ||
      (currentStep === 'email' && <EmailStep cb={getStepCallback(BuyflowSteps.age)} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback(BuyflowSteps.summary)} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep
            productId={productId}
            isDesignerBuyflow={isDesignerBuyflow}
            collectedData={collectedData}
          />
        ))}
    </>
  )
}

export default Buyflow;
