import PropTypes from 'prop-types'

function Item({brand = "Brand missing", upDate = 2024}){
    return(
        <>
            <li>
                {brand} - {upDate}
            </li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string,
    upDate: PropTypes.number,
}

export default Item