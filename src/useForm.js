import {useState, useEffect, useHistory} from 'react'

const useForm = (validate) => {
    const [values, setvalues] = useState({
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            contactNumber: "",
            password:''
    })
    const [errors, seterrors] = useState({})

    const handleChange = (e) => {
        setvalues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        seterrors(validate(values));
    }
    return {handleChange, values, handleSubmit, errors}
}
export default useForm;
