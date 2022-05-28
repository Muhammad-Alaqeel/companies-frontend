




import '../components/styles/Details.css';
import {React,useEffect,useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";



function Details() {

const params= useParams();
const [company, setCompany]=useState({});

useEffect( () => {

    const fetchCompany= async() =>{
    
      const result= await  axios.get("http://localhost:1337/companies/"+params.id);
      setCompany(result.data);
      console.log(result.data)
    
    }
      fetchCompany();
      }, []);
  return (
    // remove align items center after testing
    <div className="backgroundGradiant d-flex justify-content-center">

<div className='setMargin'>

<div className='container myDesc'>


<div className='d-flex justify-content-between img-desc'>


<div className='header-container'>
<h1 className='header1  '>{company.name}</h1>
</div>
<img  className='logo ' src={company.img} alt="insert pic"/>

</div>


<p className='passage  '>
{company.desc}</p>

</div>



</div>




    </div>
  );
}

export default Details;
