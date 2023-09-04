import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [demo, setDemo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function handlebtn() {
      setIsLoading(true)
      axios.get("https://fakestoreapi.com/products/" + page).then((result) => {
        console.log(result);
        setDemo(result.data.image);
        setTitle(result.data.title);
        setDescription(result.data.description);
        setIsLoading(false) 
      });
    }
    handlebtn();
  }, [page]);

  // function handleChange() {
  //   console.log("rajat");
  //   setPage(page + 1);
  // }

  function Loader() {
    return <h2> Loading.... </h2>;
  }

  return (
    <>
      {isLoading === false ? (
        <>
          <div className="slider">
            <div className="left">
              {/* <img src="product-image" alt="product name" /> */}
              <img src={demo} alt="" />
            </div>
            <div className="right">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="navigation">
            <button
              disabled={page === 1 ? true : false}
              onClick={() => setPage(page - 1)}
            >
              <ArrowBackIosIcon />
            </button>
            <button onClick={() => setPage(page + 1)}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
