import Button from '../Button'
import "./SearchBar.scss";
import BookSearch from '../../container/BookSearch/BookSearch.js'
import { useState } from "react";


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
                    BookSearch(currentSearch, resultCallback);
                    setCurrentSearch("");
                }}></Button>
            </div>
        </>
        
    );
};

export default SearchBar;
