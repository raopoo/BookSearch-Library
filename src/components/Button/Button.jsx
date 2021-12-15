import styles from './Button.module.scss';

const Button = ({label,clickHandler}) =>{
    return(
        <>
            <button onClick={clickHandler} className={styles.btn}>{label}</button>
        </>
    )
}

export default Button;