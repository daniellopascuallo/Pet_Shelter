import React, { useState } from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';
import PetForm from '../components/PetForm';

const New = props => {
    const initialPet = {
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    }
    const initialErrors = {
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    }
    const [pet, setPet] = useState(initialPet);
    const [errors, setErrors] = useState(initialErrors);

    const handleForm = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.post("http://localhost:8000/api/create/pet", pet)
            .then(response => {
                if(response.data.results){
                    setPet(initialPet);
                    navigate("/")
                }
                else{
                    console.log(response.data)
                    setErrors(response.data)
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Know a pet needing a home?</h2>
            <Link to="/">Back to home</Link>
            <PetForm 
            inputs={pet}
            handleInputs={handleForm}
            handleSubmit={handleSubmit}
            errors={errors}
            submitValue="Add Pet"
            />
        </div>
    );
}

export default New;

