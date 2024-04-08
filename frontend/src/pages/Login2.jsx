import React, { useState } from 'react'
import axios from 'axios'
import './Login2.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login2() {

// const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


const navigate = useNavigate()

const token=localStorage.getItem("jwt")
const handleClick=()=>{
  console.log({email,password});

axios.post("http://localhost:7000/login2",{
email:email,
password:password

}).then((res)=>{
  console.log(res.data);
  if(res.data.token){

    localStorage.setItem("jwt",res.data.token)
    navigate("/")
  }
}).catch((err)=>{

})
  
}
return (

    <div className='BB'>
      {/* {token?

      <button
      onClick={()=>localStorage.removeItem("jwt")}
      
      
      >Logout</button>
      :
      <button>Login</button>
      
      
      } */}
      <div className='login'>
      <h1>Login</h1>
      </div>
<div className='log'>
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
      {/* <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        onChange={(e)=>setName(e.target.value)} 
        
        /> */}
        <Form.Text className="text-muted">
      
        </Form.Text>
       
        <Form.Label>Email </Form.Label>
     
        <Form.Control type="email" placeholder="Enter email" 
         onChange={(e)=>setEmail(e.target.value)}
        
        />

        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)} 
          
        />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <div className='bh'>
      <Button variant="primary"onClick={handleClick}>
        Submit
      </Button><br></br>
      </div>
      <div className='re'>
        <button>
        <Link to='/register'>Don't have an account?Register</Link>
      </button>
     
      </div>
    </Form>
    </div>
    </div>

  


)

}

export default Login2