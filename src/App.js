import { useState, useEffect } from "react";
import BookcaseImg from "./components/BookcaseImg";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid/BookGrid";

function App() {
    let [books, setBooks] = useState([]);
 

    return (
        <div className="App">
            <BookcaseImg />
            <SearchBar resultCallback = {setBooks} />
            <BookGrid books={books} />
        </div>
    );
}

export default App;
