import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import '../Main.css';

const Main = props => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
            .then(response => setPets(response.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>These Pets are Looking for a Good Home</h3>
            <Link to="/new">Add a Pet to the Shelter</Link>
            <table className="col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((p, i) => {
                            return <tr key={i}>
                                <td>{p.name}</td>
                                <td>{p.type}</td>
                                <td><Link to={`/pet/${p._id}`}>Details</Link> | <Link to={`/edit/${p._id}`}>Edit</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Main;
