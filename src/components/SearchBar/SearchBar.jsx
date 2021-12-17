import Button from '../Button'
import "./SearchBar.scss";
import { useState } from "react";

const bookSearch = async (searchValue, callback) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
  
    const response = await fetch(url);
  
    const json = await response.json();
    const items = await json.items;
  
    
    let volArr = items.map(e => (e.volumeInfo));
        
    console.log("Volumne Array",volArr);
  
    
    let booksArr = volArr.map((e) => {
        let imageLink = ((e.imageLinks === undefined) ? "" : e.imageLinks.thumbnail);
       
        const book = {
            title: e.title,
            authors: e.authors,
            description: e.description,
            image: imageLink,
        };
        return book
        //return searchArr;
    });
  
    console.log("Books",booksArr);
    
    callback(booksArr);
  };

const SearchBar = ({resultCallback }) => {

    const [currentSearch, setCurrentSearch] = useState("");
    console.log("Input:", currentSearch);

    return (
        
        <>
            <div className="searchDiv">
                <input type="text"
                value={currentSearch}
                onInput={(e) => setCurrentSearch(e.target.value)}
                 className="textbox" />
                 
                <Button label="Search" clickHandler={() =>{
                    bookSearch(currentSearch, resultCallback);
                    setCurrentSearch("");
                }}></Button>
            </div>
        </>
        
    );
};

export default SearchBar;
