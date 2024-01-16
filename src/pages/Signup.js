import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { signUp } from "../services/user-service";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";

const Signup = () => {

 const [data,setData] = useState({
   name:'',
   email:'',
   password:'',
   about:'',
   error:''
 })

 const [error,setError] = useState({
  errors:{},
  isError:false
 })

 //handel Change
 const handelChange = (event,property) => {

  setData({...data,[property]:event.target.value})
  
 }

 const resetData = () => {
  setData({
    name:'',
    email:'',
    password:'',
    about:'',
    error:''
  })
 }

 //Submitting teh form
 const submitForm = (event) => {
  event.preventDefault();             //stopping the default behavior of submitting and reloading

// if(error.isError){
//   toast.error({...error,isError:false})
//   return;
// }

  console.log(data);

  //data validation

  //call server api for sending data
  signUp(data).then((resp)=>{
    console.log(resp)
    console.log("success log");
    toast.success("user is registered successfully");
    setData({
      name:'',
    email:'',
    password:'',
    about:'',
    error:''
    })

  }).catch((error)=>{
      console.log(error)
      console.log("Error log")
      // toast.error("An error occured");
      setError({
        errors:error,
        isError:true
      })
  })
  
  ;

 };


  return (
    <Base>
    <h1>Helooo</h1>
      <Container className="mt-4">
        <Row className="mt-4">

        { JSON.stringify(data) }

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse borderRadius="10px">
              <CardHeader>
                <h3>Fill information to register</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={submitForm} >
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input type="text" placeholder="Enter here" id="name" 
                     onChange={(e)=>handelChange(e,'name')}   
                     value={data.name} 
                     invalid={error.errors?.response?.data?.name ? true : false} />                       
                     
                     <FormFeedback>
                     {  error.errors?.response?.data?.name  }
                     </FormFeedback>
                     
                     </FormGroup>
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="email" placeholder="Enter here" 
                    onChange={(e)=>handelChange(e,'email')}  
                    value={data.email}  
                    invalid={error.errors?.response?.data?.email ? true : false} />

                    <FormFeedback>
                    {  error.errors?.response?.data?.email  }
                    </FormFeedback>

                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input type="password" placeholder="Enter here" 
                    onChange={(e)=>handelChange(e,'password')}  
                    value={data.password} 
                    invalid={error.errors?.response?.data?.password ? true : false} />
                    <FormFeedback>
                    {  error.errors?.response?.data?.password  }
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="about">Enter Password</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "200px" }}
                      onChange={(e)=>handelChange(e,'about')}  
                      value={data.about} 
                      invalid={error.errors?.response?.data?.about ? true : false}  />

                      <FormFeedback>
                      {  error.errors?.response?.data?.about  }
                      </FormFeedback>

                  </FormGroup>
                  <Container className="text-center">
                    <Button color="dark">Register</Button>
                    <Button  onClick={resetData} color="secondary" type="reset" className="ms-2">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
