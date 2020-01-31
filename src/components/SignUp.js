import React, { useState } from "react";
import Title from "./atoms/Title.js";
import SubmitBtn from "./atoms/SubmitBtn.js";
import Btn from "./atoms/Btn.js";

function SignUp() {
  const [ email, setEmail ] = useState("");
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
                  placeholder="enter email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required="1"
                />
              </div>
              <SubmitBtn text="Next" />
              <Btn text="next" />
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
