import React, { useEffect, useState } from 'react'
import './Rides.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Rides() {

  const{rideid}=useParams()

 
  const[ridename, setridename]=useState("")
  const[ride_description,setride_description]=useState("")
  const[ride_image,setride_image]=useState("")


  const navigate=useNavigate()
  
console.log(rideid);

const getride_id=()=>{
  axios.post("http://localhost:7000/ride_with_id/"+rideid).then((res)=>{
    console.log("ride",res.data);

setridename(res.data.ridename)
setride_description(res.data.ride_description)

setride_image(res.data.ride_image)
  })
}





useEffect(()=>{
  getride_id()
},[])

  return (
    <>

    <div className='class1'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button onClick={()=>navigate("/ride")}>Back To Ride</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
     
     
      </ul>
    
    </div>
  </div>
</nav>
</div>


{/* <div>
<button onClick={()=>navigate("/ride")}>Back To Home</button>

</div> */}
      <div className='class2'>

<h1>{ridename}</h1>

<img src={"http://localhost:7000/"+ride_image} alt="" />

<div className='c1'>

<h2>{ride_description}</h2>

</div>




{/* <p>Drop tower ride for sale with colorful lights rotating in the park. Drop tower ride is a thrilling spinning ride, which is popular with adults and kids. Besides, tower drop ride manufactured by fiberglass material and international standard steel. Importantly, automatic pressure bar seats will keep adults and children from danger.</p> */}

{/* <div className='f1'>
<h2>Big Pendulum Ride</h2>
</div>
<img className='e1'
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9NwD0uLCEqYyNGyaxJJL2C_XMOJDb8Pb-A&usqp=CAU'></img>
<div className='g1'>
<h2>Discription:</h2>
<p>At a record-breaking 170-feet in the air, the massive giant disk reaches speeds up to 75 miles-per-hour, as it whips back and forth — higher and higher giving riders a staggering view of the world below them.</p>
</div>

<div className='f1'>
<h2>Giant Wheel Ride</h2>
</div>
<img className='e1'
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReagC6JB7iR1cnSxzvMKQjrbM8az9qGvcCMw&usqp=CAU'></img>
<div className='g1'>
<h2>Discription:</h2>
<p>Giant wheel is the center of attraction for kids in any Indian carnival.</p>
</div> */}


</div>

</>



    
  )
}

export default Rides


