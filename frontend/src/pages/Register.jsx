import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [image,setimage] =  useState(null)

const handleClick=()=>{
  console.log({name,email,password});

  const formData = new FormData()

  formData.append("name",name)
  formData.append("email",email)
  formData.append("password",password)
  formData.append("file",image)




    axios.post("http://localhost:7000/Register",formData).then((res)=>{
      console.log(res.data);
      
    }).catch((err)=>{
      console.log(err);
    })
  
}
   
    
return (
    <div className='AA'>
    <Form >
      <div className='reg'>
      <h2>Create Account</h2>
      </div>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
           onChange={(e)=>setName(e.target.value)} 
        
        />
        <Form.Text className="text-muted">
     
       
        </Form.Text>
       
         
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email"
           onChange={(e)=>setEmail(e.target.value)} 
        
        />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Label>Profile image </Form.Label>
        <Form.Control type="file" 
           onChange={(e)=>setimage(e.target.files[0])} 
        
        />
      



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
           onChange={(e)=>setPassword(e.target.value)} 
        
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
<div className='bv'>
      <Button variant="primary"onClick={handleClick} >
        Sign up
      </Button>
      </div>
    </Form>
    </div>




)

}

export default Register