import styles from './Sentence.module.css'

function Sentence(){

    return(
        <div className={styles.sentenceContainer}>
            <p className={styles.sentenceContent}>This is a component with a sentence.</p>
        </div>
    )
}

export default Sentence