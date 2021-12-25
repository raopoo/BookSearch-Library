import { useState } from "react";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import BookGrid from "./components/BookGrid/BookGrid";
import Books from "./container/Books/Books";

function App() {
    let [books, setBooks] = useState([]);
 

    return (
        <div className="App">
            <Header />
            <Books resultCallback = {setBooks} books={books} />
        </div>
    );
}

export default App;
