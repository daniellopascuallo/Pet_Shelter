import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate, Link} from '@reach/router';

const Show = props => {
    const initialPet = {
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    }
    const [pet, setPet] = useState(initialPet);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(response => setPet(response.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleAdopt = () => {
        Axios.delete(`http://localhost:8000/api/delete/pet/${props.id}`)
            .then(response => navigate("/"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Details about: {pet.name}</h2>
            <Link to="/">Back to home</Link>
            <div className="col-4 mx-auto p-5">
                <h4>Pet Type: {pet.type}</h4>
                <h4>Description: {pet.description}</h4>
                <h4>Skills:</h4>
                <ul className="list-group">
                    <li className="list-group-item">{pet.skillOne}</li>
                    <li className="list-group-item">{pet.skillTwo}</li>
                    <li className="list-group-item">{pet.skillThree}</li>
                </ul>
                <br/>
                <button className="btn btn-warning btn-outline-success" onClick={handleAdopt}>Adopt {pet.name}</button>
            </div>
        </div>
    );
}

export default Show;