import React, { useState } from "react";
import Title from "./atoms/Title.js";
import SubmitBtn from "./atoms/SubmitBtn.js";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    agree: false
  });
  const [submitBtn, setSubmitBtn] = useState("next");
  const [currentStep, setCurrentStep] = useState(1);

  const updateFields = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleCurrentStep(step) {
    if (step === 2) {
      setCurrentStep(2);
      setSubmitBtn("submit");
    } else {
      setCurrentStep(1);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("next button hit");
    currentStep === 1 ? handleCurrentStep(2) : submitForm();
  };

  function submitForm() {
    console.log(form.email, form.firstName, form.lastName, form.agree);
  }

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
                    name="email"
                    placeholder="enter email address"
                    value={form.email}
                    onChange={updateFields}
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
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={updateFields}
                      required
                    />
                  </div>
                  <div className="lName">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={updateFields}
                      required
                    />
                  </div>
                </div>
              )}
              <SubmitBtn text={submitBtn} />
            </div>
            {currentStep === 1 && (
              <div className="gdpr">
                <div>
                  <input
                    id="gdpr"
                    name="agree"
                    type="checkbox"
                    required
                    checked={form.agree}
                    onChange={updateFields}
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
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
