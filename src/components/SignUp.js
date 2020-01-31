import React from "react";
import Title from "./atoms/Title.js";
import SubTitle from "./atoms/SubTitle.js";
import SubmitBtn from "./atoms/SubmitBtn.js";

function SignUp() {
  // handleChange = (e) => {
  //   this.props.dispatch({ type: "SAVE_EMAIL" , email: e.target.value })
  //   // console.log(e.target.value)
  // }
  return (
    <div className="container">
      <div className="row">
        <form>
          <Title text="join the list" type="title" />
          <div className="tab-des">
            <Title text="sign up for the tlc newsletter." type="subTitle" />
            <div className="form-group">
              <div className="email">
                <input
                  type="email"
                  id="email"
                  placeholder={"this.props.emailText"}
                  value={"this.props.email"}
                  onChange={"this.handleChange"}
                  required="1"
                />
              </div>
              <SubmitBtn text="Next" />
            </div>
            <div className="gdpr">
              <div>
                <input id="gdpr" name="isGoing" type="checkbox" />
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
