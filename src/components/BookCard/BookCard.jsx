import styles from './BookCard.module.scss';

const BookCard = ({title,authors,description,image}) => {

    return(
        <div className={styles.card}>
            <img className={styles.card__image} src={image} alt={title} />
            <h2>{title}</h2>
            <p>{authors}</p>
            <p>{description}</p>
        </div>
    )
}

export default BookCard;