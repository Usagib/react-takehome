import React, { useState } from 'react'

const InputForm = props => {
    const [inputData, setData] = useState({
        fname: "",
        lname: "",
    })

    const onChange = e => {
        setData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="fname"
            onChange={onChange}
            type="text"
            placeholder='firstname'
            value={inputData.fname}
            className="input-text"/> 
             <input name="lname"
            onChange={onChange}
            type="text"
            placeholder='lastname'
            value={inputData.lname}
            className="input-text"/>

            <button className='input-submit'>
                Submit
            </button> 
        </form>
        <h1>{inputData.fname}</h1>
        <h1>{inputData.lname}</h1>
        </>
    )
}

export default InputForm

