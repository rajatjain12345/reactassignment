import React, { useEffect, useState } from "react";
import axios from "axios";

//useEffect: is used to curb side effects introduced by state in the code
// in this case the side effect was infinite loading

function AxiosMagic() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    function handleRandomData() {
      // fetch("https://randomuser.me/api")
      // .then((response) => {return response.json()})
      // .then((result) => {console.log(result)})

      axios.get("https://randomuser.me/api").then((result) => {
        console.log(result.data.results[0]);
        setName(
          result.data.results[0].name.first +
          
            " " +
            result.data.results[0].name.last
        );
        setPhoto(result.data.results[0].picture.large);
        setEmail(result.data.results[0].email);
        setPhone(result.data.results[0].cell);
      });
    }
    handleRandomData()
  }, []);

  return (
    <>
      {/* <button onClick={handleRandomData}>Get Random Data</button> */}
      
      <img src={photo} />
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
}

export default AxiosMagic;
