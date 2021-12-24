import  "./Header.scss";
import shelf from "./book-shelf.jpg"

const Header = () => {
    return (
        <div>
            <h1 className="heading">Welcome to my library</h1>
            <img src={shelf} alt="books in a shelf" className="shelf" />
        </div>
    );
};

export default Header;
