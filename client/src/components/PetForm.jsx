import React from 'react';

const PetForm = props => {
    const { inputs, handleInputs, handleSubmit, errors, submitValue } = props;
    const { name, type, description, skillOne, skillTwo, skillThree } = inputs;

    return (
        <div>
            <form className="col-5 mx-auto bg-light p-4 rounded" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Pet Name:</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={handleInputs} value={name} />
                    <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Pet Type:</label>
                    <input className="form-control" type="text" name="type" id="type" onChange={handleInputs} value={type} />
                    <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Pet Description:</label>
                    <input className="form-control" type="text" name="description" id="description" onChange={handleInputs} value={description} />
                    <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
                </div>
                <h6>Skills (Optional):</h6>
                <div className="form-group">
                    <label htmlFor="skillOne">skill One:</label>
                    <input className="form-control" type="text" name="skillOne" id="skillOne" onChange={handleInputs} value={skillOne} />
                </div>
                <div className="form-group">
                    <label htmlFor="skillTwo">skill Two:</label>
                    <input className="form-control" type="text" name="skillTwo" id="skillTwo" onChange={handleInputs} value={skillTwo} />
                </div>
                <div className="form-group">
                    <label htmlFor="skillThree">skill Three:</label>
                    <input className="form-control" type="text" name="skillThree" id="skillThree" onChange={handleInputs} value={skillThree} />
                </div>
                <input className="btn btn-success" type="submit" value={submitValue} />
            </form>
        </div>
    );
}

export default PetForm;


