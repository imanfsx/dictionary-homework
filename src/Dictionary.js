import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    // setResults(response.data);
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();

    let apiKey = `385o3754a369fbecdd611206btfe6a77`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = `385o3754a369fbecdd611206btfe6a77`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  return (
    <div className="Dictionary">
      <div className="Dictionary-search text-center">
        <form onSubmit={handleSearch}>
          <h1>Search for whatever your heart desires 💗 </h1>
          <input
            type="search"
            autoFocus={true}
            placeholder="Make sure you spell it correctly!"
            onChange={search}
          />
          <div className="hint">
            You can search for books, peace, religion, pilates ...
          </div>
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
