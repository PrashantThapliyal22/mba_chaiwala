import React from "react";

const Section = ({
  h3,
  text,
  hasBtn,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  return (
    <section classaaName="section">
      <div>
        <h3
          style={{
            color: headingColor,
          }}
        >
          {h3}
        </h3>
        <p
          style={{
            color: headingColor,
          }}
        >
          {text}
        </p>
        {hasBtn && (
          <button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
          >
            {btnTxt}
          </button>
        )}
        <div>
          <img src={imgSrc} alt="ImgSrc" />
        </div>
      </div>
    </section>
  );
};

export default Section;
