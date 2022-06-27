import React from "react";
import "./information.style.css";
const Information = () => {
  return (
    <div className="information">
      <div className="information-explore">
        {/* Information */}
        {/* check box i am travelling */}

        <div className="checked">
          <label htmlFor="checked"></label>
          <input type="checkbox" name="checked" id="checked" />
          <span>I'm traveling for work</span>
        </div>
        {/* covid alert */}
        <div className="guideline">
          <p className="guideline-text">
            Get the advice you need. Check the latest COVID-19 restrictions
            before you travel. <span>Learn more</span>
          </p>
        </div>
        {/* cashback offer  */}
        <div className="cashback">
          <div className="cashback-img">
            <img
              src="https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg"
              alt="cashback"
            />
          </div>
          <div className="cashback-save">
            <h4>save 14% or more</h4>
            <p>plan your dream trip with a Getaway Deal</p>
            <button>explore deals</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
