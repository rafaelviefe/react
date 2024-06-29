import styles from '../styles/Card.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

import ProjectInfo from '../layout/ProjectInfo'

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {

    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <ProjectInfo
                info="Custo total"
                value={cost}
                priceable="R$"
            />
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard