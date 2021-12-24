import SearchBar from "../../components/SearchBar";
import BookGrid from "../BookGrid";

const Books = ({resultCallback, books}) =>{
 return(
     <>
         <SearchBar resultCallback={resultCallback}/>
         <BookGrid books={books}/>
     </>
 )
}

export default Books;