import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './Dictionary.css';
import Results from "./Results.js";
import axios from "axios";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultkeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);


    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

   
    function handleSubmit(event) {
        event.preventDefault();
        search();
       
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
        return(
            <div className="dictionary">
            <section>
            <h1>What word do you want to look up?</h1>
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange}></input>
    </form>
    <div className="hint">
        for example: sunset, wine, yoga...
    </div>
    </section>
    <Results results={results}/>
    </div>
        );

    } else {
        load();
        return "Loading";
    }

    
}