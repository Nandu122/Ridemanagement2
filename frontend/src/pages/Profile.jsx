import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Form, useNavigate } from 'react-router-dom'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>



const Profile=()=>{

    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const [imagepath,setimagepath] = useState("")
    const navigate=useNavigate()
    const getUser=()=>{
        const token=localStorage.getItem("jwt")

        if(token){

            axios.post("http://localhost:7000/getuser",{

                token:token
            }).then((res)=>{
                console.log(res.data);
                setimagepath(res.data.profile_image)
                setname(res.data.name)
                setemail(res.data.email)

            }).catch((err)=>{
                console.log(err);
            
            })

        }else{
            navigate("/login2")
           
        }


    }

    useEffect(()=>{
        getUser()
    },[])


  return (
    <>
    <div>
      {/* UserName:{name}
      Email:{email} */}
    </div>
    <div className='p'>
    {/* <div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0K_yhqlhn2mp4OEtrdDMGl52c7ee-crvyw&usqp=CAU"/>
  <div class="card-body">
    <h2 class="card-title">Anu</h2>
    <h4>web devoloper</h4> */}
    <div className='cardss'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img6'src={"http://localhost:7000/" +imagepath} />
      <Card.Body>
        <div className='anu'>
        <h2>Nandana</h2>
        </div>
        <div className='dev'>
          <h4>software Devoleper</h4>

        </div><br></br>
       
        {/* <div className='edu'>
        <h2>Education</h2>
        </div>
        <div className='bs'>
            <h3>Bsc cs</h3>

        </div>
        <div className='about'>
        <h2>About</h2>
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
 <form>
  {/* <div class="mb-3">
    <label for="exampleInputText1" class="form-label">Name:Nandana</label>
    {/* <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp"/> */}
{/* 
  </div> */}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email:ammunanduzz@gmal.com</label>
    {/* <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password:123</label>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">DOB:April 3, 2003</label>
   
  </div>
 {/* <div className='save'> 
  <button type="submit" class="btn btn-primary">Save</button>
  </div> */}
</form>
 
        {/* <div>
    <i class="bi bi-heart-fill"></i>
    <i class="bi bi-person-fill"></i>
    </div> */}
    <h1></h1>
    
      </Card.Body>
      
    </Card>
 
    </div>
    </div>
    <div className='class3'>
    <button onClick={()=>navigate("/")}>Back To Home</button>
    </div>
{/* 
  </div>
</div> */}
</>
  )
}

export default Profile
