import Card from "../Card";
import styles from "./BookGrid.module.scss";

const BookGrid = ({ books }) => {
    console.log("My books", books);

    return (
        <div className={styles.booksDiv}>
            {books.map((e, index) => {
                return (
                    <Card
                        key={index}
                        title={e.title}
                        authors={e.authors}
                        image={e.image}
                        description={e.description}
                    ></Card>
                );
            })}
        </div>
    );
};

export default BookGrid;
