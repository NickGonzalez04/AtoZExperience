import React from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { Card,Icon, Image } from 'semantic-ui-react';

function ExperienceCard(props) {
  
  function deleteMe() {
    axiosWithAuth()
      .delete(`/exp/${props.exp.id}`)
  }

  return (
  
    <Card>
       <Image src={props.exp.img_url} wrapped ui={false}/>
       <Card.Header>
      Name: {props.exp.name}
      </Card.Header>
      <Card.Meta>
      Location: {props.exp.location}
      </Card.Meta>
      
      <Card.Description>
        {props.exp.description}
      </Card.Description>
      <Card.Content>
      <a>Price: {props.exp.pricing}</a>
      </Card.Content>

    <div className='buttons'>
      <button>Edit</button>
      <button onClick={deleteMe}>Delete</button>
      </div>
    </Card>

  )};

export default ExperienceCard;
