import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <section className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        // const base64String = btoa(
        //   String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        // );
        
        const base64String = Array.from(new Uint8Array(singleData.img.data.data), byte => String.fromCharCode(byte)).join("");
        const theImage = btoa(base64String);
        return <img className="upload" src={`data:image/png;base64,${theImage}`}/>
      })}
    </section>
  );
}

export default App;
