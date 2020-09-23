import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';
import PetForm from '../components/PetForm';

const Edit = props => {
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
    const [editPet, setEditPet] = useState(initialPet);
    const [errors, setErrors] = useState(initialErrors);

    const handleForm = e => {
        setEditPet({
            ...editPet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.put(`http://localhost:8000/api/update/pet/${props.id}`, editPet)
            .then(response => {
                if(response.data.results){
                    setEditPet(initialPet);
                    navigate(`/pet/${props.id}`);
                }
                else{
                    console.log(response.data)
                    setErrors(response.data)
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(response => setEditPet(response.data.results))
            .catch(err => console.log(err));
    }, [props])

    return (
        <div>
            <h2>Edit {editPet.name}</h2>
            <Link to="/">Back to home</Link>
            <PetForm 
            inputs={editPet}
            handleInputs={handleForm}
            handleSubmit={handleSubmit}
            errors={errors}
            submitValue="Edit Pet"
            />
        </div>
    );
}

export default Edit;


