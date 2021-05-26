// import  {StepOne} from './component/step1';
import  { useState } from 'react';
import './stylesPage/Page.scss';
import {StepOne} from "./component/formPage.component/form1.component" 
import {StepTwo} from "./component/formPage.component/form2.component";
export default function App() {
  const [data, setData] = useState({
    Source_location: " ",
    Destination: "",
    Car_type: "",
    Num_travellers:0,
    Amount:"$",
    Negotiable:false,
    Name:"",
    Number:"91",
    UpdateOn:false,
    Remarks:"",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [tempState, setTempStep] = useState(1);

  const setTempState=(state)=>{
    setTempStep((prev)=>state);
  }

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      return(
        <h1> Thanks for your submission</h1>
      );
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} tempState={setTempState}prev={handlePrevStep} data={data} />
  ];

  console.log("data", data);

  return (
      <div className="grid-container">
      <div className="img-obj">
          <img className="imgvahak" src="logo/Vahak-logo.png"/>
      </div>
      <div className="bar">
        <div className="barText">
         {
          tempState<3
          ?"Place your Bid ("+(1+currentStep)+"/4) step"
          :tempState===3
          ?"Verify OTP (3/4)step"
          :"Summary & Submit Bid (4/4)step"
         } 
         </div>
      </div>
      <div className="input-container">
          {steps[currentStep]}
      </div>
      </div>
  );
}
