import React from "react";

export default function UserLocation(props) {
  const {
    temperature,
    description,
    location,
    region,
    country,
    img,
  } = props.weather;

  return (
    <div className="user-weather">
      <h1>
        {temperature}
        <sup>o</sup>C , {description}
      </h1>
      <h4>{location}</h4>
      <p>
        {region} , {country}
      </p>
      <div className="image">
        <img className="mainImg" src={img} alt="weather-img" />
      </div>
    </div>
  );
}
