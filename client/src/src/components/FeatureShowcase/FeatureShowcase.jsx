"use client";
import React from "react";
import "./FeatureShowcase.css";

import img1 from "../../../images/arrow1.svg";
import bg2 from "../../../images/bg2.svg";

const FeatureShowcase = () => {
  return (
    <div className="feature-showcase">
            <img src={bg2} className="feature-showcase__background" />

      <div className="feature-showcase__container">

        <div className="feature-showcase__content">
          <div className="feature-showcase__grid-top">
            <div className="feature-card feature-top">
              <img src={img1} className="feature-card__icon" />
              <h3 className="feature-card__title">Ready to Go Algos</h3>
              <p className="feature-card__description">
                We have ready accelerators embedded with learnings from hundreds
                of past
                <br />
                projects, generating actionable results.
              </p>
            </div>

            <div className="feature-card feature-top">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b46aaddbfdb4a2c99206af27bbbfaa8fe84c2f?placeholderIfAbsent=true&apiKey=ef603fc4302a4e3991694bc75ca7a5d1" className="feature-card__icon" />
              <h3 className="feature-card__title">
                Internal capability building
              </h3>
              <p className="feature-card__description">
                We productize all our work, enhance them with the latest AI
                technology, and train your internal teams to leverage them.
              </p>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-bar__indicator"></div>
          </div>

          <div className="feature-showcase__grid-bottom">
            <div className="feature-card feature-bottom">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd80b3661ca84540556595ba31ea80d40062d2a?placeholderIfAbsent=true&apiKey=ef603fc4302a4e3991694bc75ca7a5d1" className="feature-card__icon" />
              <h3 className="feature-card__title">Multi-source data</h3>
              <p className="feature-card__description">
                Our solutions work with old, new, or incomplete datasets, in
                different formats, and from varied sources.
              </p>
            </div>

            <div className="feature-card feature-bottom">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca9a8f3512f1e6196961fa7fb077934947f3c16?placeholderIfAbsent=true&apiKey=ef603fc4302a4e3991694bc75ca7a5d1" className="feature-card__icon" />
              <h3 className="feature-card__title">Stakeholder alignment</h3>
              <p className="feature-card__description">
                No black boxes. Stakeholders understand the "how", "so what" and
                "now what", leading to clear decision-making trade offs.
              </p>
            </div>

            <div className="feature-card feature-bottom">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef4b46056367609e0d271a1fe6c16888c03a913?placeholderIfAbsent=true&apiKey=ef603fc4302a4e3991694bc75ca7a5d1" className="feature-card__icon" />
              <h3 className="feature-card__title">Continuous engagement</h3>
              <p className="feature-card__description">
                We engage in the long-term to enhance, course-correct, and adopt
                new models to
                <br />
                continuously refine your work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
