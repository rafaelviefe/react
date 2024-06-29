import styles from './ProjectInfo.module.css'

function ProjectInfo({ info, value, priceable }) {
    return (
        <p>
            <span className={styles.emphasis}>{info}:</span> {priceable ? priceable : ""}{value}
        </p>
    )
}

export default ProjectInfo