import React, { useContext } from 'react';
import { ExperienceContext } from '../contexts/ExperienceContext';

//Components 
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
    const { experiences } = useContext(ExperienceContext);
    console.log(experiences);
    return (
        <div className="experiences-container">
  {experiences.data.map(experience => (
      <ExperienceCard 
        key={experience.id}
        experience={experience}
        />
  ))}
  </div>
    );
};

export default Experiences;