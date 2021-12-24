import BookCard from "../../components/BookCard";
import styles from "./BookGrid.module.scss";

const BookGrid = ({ books }) => {
    console.log("My books", books);

    return (
        <div className={styles.booksDiv}>
            <div className={styles.booksDiv__cardWrapper}>
                {books.map((e, index) => {
                    return (
                        <BookCard
                            key={index}
                            title={e.title}
                            authors={e.authors}
                            image={e.image}
                            description={e.description}
                        ></BookCard>
                    );
                })}
            </div>
        </div>
    );
};

export default BookGrid;
