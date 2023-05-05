import * as React from 'react';
import Step2 from './Step2';
import Step3 from './Step3';

export default function StepForm() {
  return (
    <div>
      {/* tepForm controla quien se muestra dependiendo el estado del steeper */}
      <br/>
      <Step2/>
      <br/>
      <Step3/>
    </div>
  )
}