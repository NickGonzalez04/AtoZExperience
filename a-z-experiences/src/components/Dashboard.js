import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import ExperienceCard from './ExperienceCard';


const Dashboard = () => {
    const [experience, setExperience] = useState([]);


    useEffect(()=>{
     axiosWithAuth()
      .get('/exp')
      .then(res => {
          console.log('experience', res);
          setExperience(res.data);
      })
      .catch(error => {
          console.log(error);
      })
    }, []);



return(
    <section className="Experience-view">
     {experience.map( exp => {
         return <ExperienceCard key={exp.id} exp={exp}/>      
     })}
    </section>
    )
};


export default Dashboard;