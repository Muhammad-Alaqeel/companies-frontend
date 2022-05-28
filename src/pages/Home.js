
import Card from '../components/Card';
import axios from 'axios';
import { React,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Home.css';
function Home() {


const [companies, setCompanies]= useState([]);

useEffect( () => {

const fetchCompanies= async() =>{

  const result= await  axios.get("http://localhost:1337/companies");
  setCompanies(result.data);
  console.log(result.data[7].id)

}
  fetchCompanies();
  }, []);



  const loopCompany= companies.map(company => {
   return <div className='col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center companiesMax'>
   {console.log(company.id)}
   <Link to={'/Details/'+company.id}>
   <Card 
        id={company.id}

       name={company.name}     
     
       img={company.img}
  
      
       
       brief={company.brief}
        />
      </Link>
        </div>
  }
  )
  



  return (
    <div className="myHome d-flex justify-content-center ">
   
 
<div className='row setHeight'>

 {loopCompany} 
   
 </div>
 
    </div>
  );
}

export default Home;
