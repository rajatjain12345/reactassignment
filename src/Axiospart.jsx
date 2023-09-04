import React, { useEffect, useState } from "react";
import axios from "axios";
// import axios from "axios";

const Axiospart = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    function handleClick() {
      // fetch("https://randomuser.me/api")
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((result) => {
      //     console.log(result.results[0].gender);
      //   });
      // setPhoto(result.results[0].gender);

      axios.get("https://randomuser.me/api").then((result) => {
        console.log(result.data.results[0]);
        setPhoto(result.data.results[0].picture.large);
        setName(result.data.results[0].name.first);
        setPhone(result.data.results[0].cell);
        setEmail(result.data.results[0].email);
        setLocation(result.data.results[0].location.country);
      });
    }
    handleClick();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <button style={{ marginBottom: "20px" }} onClick={handleClick}>
          Get random data
        </button> */}
        <img src={photo} />
        <h4>{name}</h4>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{location}</p>
      </div>
    </>
  );
};

export default Axiospart;

///////doubts////////////

/*  1. what is the working of useEffect on page refreshing ?
    2. when page is reloading then why data loads two times?
    3. Flow of complete react strutcure from main file to Axiospart file ? */
