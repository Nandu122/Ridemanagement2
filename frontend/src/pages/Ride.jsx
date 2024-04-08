import React, { useEffect, useState } from 'react'
import './Ride.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rides from './Rides';



function Ride() {

  const navigate=useNavigate()

  const [ride,setride]=useState([])


  
  const viewRide = ()=>{
    axios.post("http://localhost:7000/view_ride").then((res)=>{
      console.log(res.data);
      setride(res.data)
    }).catch(err=>{
      res.send(err)
    })
  }


  useEffect(()=>{
    viewRide()
  },[])




  return (
    <>
    
    <div className='bb'>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ride Mnagement</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div className='aa'>
          <a class="nav-link active" aria-current="page" href="/ride">

            {/* <h4>Ride</h4> */}
          </a>
          </div>
        </li>
       
      </ul>
 
    </div>
  </div>

</nav>

<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img className="adhu" src="http://localhost:7000/files/grape1.jpg" class="d-block w-100" alt=""/>
      </div>
      {/* <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLsPxP44XlABDiayYfrpT8qhCh-7ziClW1g&usqp=CAU" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlAdVd6ehv2iKesUMx2iCPSMwAmByNYPlKQ&usqp=CAU" class="d-block w-100" alt="..."/>
      </div> */}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


<div>

{/* <div className='spin'>
  



  <h1>Adventure Ride Section</h1>
</div> */}

{
  ride.map((element,index)=>(

    
    <div className='card1'>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"http://localhost:7000/"+element.ride_image}/>
      <Card.Body>
        <Card.Title>{element.ridename}</Card.Title>
       
        <Button variant="primary" onClick={()=>navigate("/Rides/"+element._id)}>view</Button>
        
      </Card.Body>
     
    </Card>

    

  
    </div>
      ))
    }

    </div>
   


</div>


  </>
  )
}


export default Ride




