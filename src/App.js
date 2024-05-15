import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./components/Header"
import Form from "./components/Form"
import Users from "./components/Users"

const App = ()=> {

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '' 
    })

    const [ users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))

    }, [])

    // console.log(users)


    const handleChange = (event)=> {
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=>{

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(regex.test(formData.password) === false ) {
            alert("Password is not valid.\nMust contian:\n&middot; one uppercase lestter\n&middot; one lowercase letter\n&middot; one number\n&middot; one special character &\n&middot; at least 8 characters")
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }

    return(
        <>
            <Header users={users}/>
            <Form
                formData={formData} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            { <Users users={users} /> }
        </>
    )
}

export default App