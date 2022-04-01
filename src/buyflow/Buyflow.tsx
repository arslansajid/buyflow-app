import { BuyflowSteps, ProductIds } from './Buyflow.types';
import React, { useEffect, useMemo, useState } from 'react';

import AgeStep from './AgeStep';
import { AppContextProvider } from "../context/AppContext";
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

  useEffect(() => {
    if (isDesignerBuyflow) {
      setStep(BuyflowSteps.firstName)
    }
  }, [isDesignerBuyflow])

  return (
    <AppContextProvider>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>

      {currentStep === BuyflowSteps.firstName && (
        <FirstNameStep moveToNextStep={() => setStep(BuyflowSteps.lastName)} />
      )}
      {currentStep === BuyflowSteps.lastName && (
        <LastNameStep moveToNextStep={() => setStep(BuyflowSteps.email)} />
      )}
      {currentStep === BuyflowSteps.email && (
        <EmailStep moveToNextStep={() => setStep(BuyflowSteps.age)} />
      )}
      {currentStep === BuyflowSteps.age && (
        <AgeStep moveToNextStep={() => setStep(BuyflowSteps.summary)} />
      )}
      {(currentStep === BuyflowSteps.summary && (
        <SummaryStep
          productId={productId}
          isDesignerBuyflow={isDesignerBuyflow}
        />
      ))}
    </AppContextProvider>
  )
}

export default Buyflow;
