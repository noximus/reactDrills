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
  // const [content, setContent] = useState ({
  //   title: "join the list",
  //   subTitle: "sign up for the tlc newsletter.",
  //   title: "",
  // })
  const [title, setTitle] = useState("join the list");
  const [subTitle, setSubTitle] = useState("SIGN UP FOR THE TLC NEWSLETTER.");
  const [submitBtn, setSubmitBtn] = useState("next");
  const [currentStep, setCurrentStep] = useState(1);

  const updateFields = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const updateContent = e => {
  //   setContent({ ...content, })
  // }

  function handleCurrentStep(step) {
    if (step === 2) {
      setCurrentStep(2);
      setSubmitBtn("sign up");
      setSubTitle("Almost Done! Please Enter Your First and Last Name.");
    } else if (step === 3) {
      setCurrentStep(3);
      setTitle("congratulations!");
      setSubTitle("Thank You For Signing Up!");
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("next button hit");
    if (currentStep === 1) {
      handleCurrentStep(2);
    } else if (currentStep === 2) {
      handleCurrentStep(3);
    } else {
      submitForm();
    }
  };

  function submitForm() {
    console.log(form.email, form.firstName, form.lastName, form.agree);
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <Title text={title} type="title" />
          <div className="tab-des">
            <Title text={subTitle} type="subTitle" />
            <div className="form-group">
              {currentStep === 1 && (
                <div className="email">
                  <input type="email" id="email" name="email" placeholder="enter email address" value={form.email} onChange={updateFields} required />
                </div>
              )}
              {currentStep === 2 && (
                <div className="fullName">
                  <div className="fName">
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" value={form.firstName} onChange={updateFields} required />
                  </div>
                  <div className="lName">
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={form.lastName} onChange={updateFields} required />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="bodyCopy">
                  <p>Look out for the latest news on your favorite shows.</p>
                </div>
              )}
              {currentStep !== 3 && <SubmitBtn text={submitBtn} />}
            </div>
            {currentStep === 1 && (
              <div className="gdpr">
                <div>
                  <input id="gdpr" name="agree" type="checkbox" required checked={form.agree} onChange={updateFields} />
                </div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">I agree to receive information from</span> <span className="aw">Discovery Communications in accordance</span>{" "}
                    <span className="aw">
                      with the following <a href="https://www.google.com/">Privacy Policy</a>
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
