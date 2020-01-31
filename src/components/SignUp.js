import React, { useState } from "react";
import Title from "./atoms/Title.js";
import SubmitBtn from "./atoms/SubmitBtn.js";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("next");
  const [currentStep, setCurrentStep] = useState(1);

  function handleCurrentStep(step) {
    if (step === 2) {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("next button hit");
    handleCurrentStep(2);
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <Title text="join the list" type="title" />
          <div className="tab-des">
            <Title text="sign up for the tlc newsletter." type="subTitle" />
            <div className="form-group">
              {currentStep === 1 && (
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="enter email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}
              {currentStep === 2 && (
                <div className="fullName">
                  <div className="fName">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="lName">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              <SubmitBtn text={submitBtn} />
            </div>
            <div className="gdpr">
              <div>
                <input
                  id="gdpr"
                  name="isGoing"
                  type="checkbox"
                  required
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                />
              </div>
              <div>
                <label htmlFor="gdpr">
                  <span className="aw">
                    I agree to receive information from
                  </span>{" "}
                  <span className="aw">
                    Discovery Communications in accordance
                  </span>{" "}
                  <span className="aw">
                    with the following{" "}
                    <a href="https://www.google.com/">Privacy Policy</a>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
