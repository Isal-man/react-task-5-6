/* eslint-disable react/prop-types */

// Smartphone CSS
import './Smartphone.css'

const Smartphone = ({ id, name, price }) => {
    return(
        <div className="smartphone-wrapper card">
            <h2>ID: {id}</h2>
            <h3>Nama: {name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}

export default Smartphone