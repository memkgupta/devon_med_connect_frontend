import React from 'react'
import StepElement from './StepElement';

function ProcessSteps({currentStep}) {
    const steps = [
        { number: 1, title: 'Fill Form', description: 'Browse and select the items you want to order.' },
        { number: 2, title: 'Review', description: 'Add selected items to your shopping cart.' },
        { number: 3, title: 'Payment', description: 'Check your order details and make any necessary changes.' },
        { number: 4, title: 'Confirmation', description: 'Provide payment information to complete the purchase.' },
       
      ];
  return (
    <div className=" mx-auto mt-8 p-6 bg-white rounded-md  flex justify-center">
 
    {steps.map((step) => (
      <StepElement
      currentStep={currentStep}
        key={step.number}
        stepNumber={step.number}
        stepTitle={step.title}
        stepDescription={step.description}
      />
    ))}
  </div>
  )
}

export default ProcessSteps