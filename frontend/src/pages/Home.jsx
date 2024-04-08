
import './Home.css'


// function Home() {
//   return (
    // <div className="img">
    //     <img src="data:image/jpeg;base64,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"></img>
    // </div>
//   )
// }

// export default Home
function Home() {
const token=localStorage.getItem("jwt")


const handleLogout=()=>{
  localStorage.removeItem("jwt")
  window.location.reload()
}

  return (
   
    <>
    <div className='hhbb'>
<nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
  <div class="container-fluid ">
    <a class="navbar-brand me-50 " href="#" >Ride Management</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <div className='ride'>
          <a class="nav-link active" aria-current="page" href="/Login2">Login2</a>

</div>
        </li> */}
{/*         
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
          </li> */}
{/*           
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">Register</a>
          </li>  */}
      <li class="nav-item">
          <a  class="nav-link active link_hello" aria-current="page" href="/ride">
           Ride
            </a>
          </li> 
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/profile">Profile</a>
          </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Home</a>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>

        </li> */}

      
{
  token ?
  
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleLogout}>
    Logout
  </a>

</li>
:
<>

<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/login2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Login
          </a>
          
       
      </li>
        {/* <li class="nav-item">
          <a class="nav-link " href="/register" aria-disabled="true">Register</a>
        </li> */}
        

</>

}




      </ul>

        {/* <div className="search">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search </button>
    
      </form>
      </div> */}
    </div>
   
  </div>
 
</nav>

<div className='banner'>
  

</div>
</div>

</>

  )}

  export default Home