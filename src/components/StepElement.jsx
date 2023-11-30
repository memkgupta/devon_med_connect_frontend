import React from 'react'

function StepElement({ stepNumber, stepTitle, stepDescription,currentStep }) {
  return (
    <div className="flex items-center mb-6 mx-12 " style={{minWidth:"fit-content"}}>
    <div className={`flex-shrink-0 w-8 h-8 ${stepNumber===currentStep?'bg-blue-500':'text-black'} border-blue-500 border-2 text-white rounded-full flex items-center justify-center`}>
      {stepNumber}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-500">{stepTitle}</h3>
   
    </div>
  </div>
  )
}

export default StepElement