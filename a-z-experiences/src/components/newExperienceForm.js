import React,{ useState } from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';
import { Form, Button } from 'semantic-ui-react';

const NewExperienceForm= (props) => {
  let [data, setData] = useState(
      {
  rating: '',
  name: '',
  pricing: '',
  location: '',
  description: '',
  img_url: '',
  origin_user:JSON.parse(localStorage.getItem('token')).id
      }
  );

const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})    
};


const onSubmit = (e) => {
 e.preventDefault()
   axiosWithAuth()
   .post('/exp/newexp', data)
 .then(res => {
     console.log(res);
     console.log(localStorage.getItem('token'))
     props.history.push('/Dashboard');
 })
 .catch(err => console.log(err));
};

  return (
      <div>
        <Form onSubmit={onSubmit}>
        <Form.Field>
            <Form.Input 
             type="text"
             name="name"
             placeholder="Name"
             onChange={handleChange}
             />
            </Form.Field>
             <Form.Field>
             <input 
             type="number"
             name="rating"
             placeholder="Rating"
             onChange={handleChange}
             />
             </Form.Field>
            <Form.Field>
              <input 
             type="text"
             name="location"
             placeholder="Location"
             onChange={handleChange}
             /> 
             </Form.Field>
             <Form.Field>
             <input 
             type="text"
             name="description"
             placeholder="Description"
             onChange={handleChange}
             />
             </Form.Field>
             <Form.Field>
              <input 
             type="text"
             name="img_url"
             placeholder="Image URL"
             onChange={handleChange}
             />
             </Form.Field>
             <Form.Field>
            <input 
             type="text"
             name="pricing"
             placeholder="Pricing"
             onChange={handleChange}
             />
             </Form.Field>
        <Button>Add Experience</Button>
        </Form>
    </div>
  );

}




export default NewExperienceForm;