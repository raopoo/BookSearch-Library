const BookSearch = async (searchValue, callback) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
  
    const response = await fetch(url);
  
    const json = await response.json();
    const items = json.items;
  
    
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

  export default BookSearch;