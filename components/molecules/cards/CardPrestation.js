import React from "react";

const CardPrestation = (props) => {
  const title = props.title;
  const img = props.img;
  const backgroundColor = props.backgroundColor;
  return (
    <div className="w-64 mt-5 z-0 relative sm:ml-3">
      <div
        className="lg:w-9/12 w-full absolute bottom-0 left-0 lg:-bottom-2 lg:-left-2 py-8 px-2 lg:py-14 lg:px-5"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: "0 100px 0 0",
        }}
      >
        <h3 className="text-white w-5/12">{title}</h3>
      </div>
      <img
        src={img}
        className="w-full h-full object-cover"
        style={{ borderRadius: "0 120px 0 0" }}
      />
    </div>
  );
};

export default CardPrestation;
