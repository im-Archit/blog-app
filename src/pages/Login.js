import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
  Label,
  Input,
  FormGroup, Button
} from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";


const Login = () => {

  const [loginDetail, setLoginDetail] = useState({
    username:'',
    password:''
  })

  const handelChange = (event, field) => {

    let actualValue=event.target.value 
    setLoginDetail({
       ...loginDetail,[field]:actualValue
    })

  }
  const handelReset = () => {

   setLoginDetail({
    username:'',
    password:''
   })

  }

  const handelFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    if(loginDetail.username=='' ){
      toast.error("username is required")
      return;
    }

//data submit to server to generate token
    loginUser(loginDetail).then((data)=>{
      console.log("user login: ")
      console.log(data)


        //save data to local storage
        doLogin(data,()=>{
          console.log("login detail is saved to local storage")
        })


      toast.success('logine Done')
    }).catch(error=>{
      if(error.status==400){
        toast.error(error.response.data.message)
      } else {
       toast.error("Something went wrong")
      }
    })

  };

  return (
    <Base>
      <h1>helooo</h1>
      <Container className="mt-4">
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse >
              <CardHeader>
                <h3>Login Here</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handelFormSubmit} >
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="text" id="email" placeholder="Enter here" value={loginDetail.username}
                    onChange={(e)=>handelChange(e,'username')} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter here" value={loginDetail.password} onChange={(e)=>handelChange(e,'password')}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="light" outline>Login</Button>
                    <Button color="secondary" type="reset" className="ms-2">
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

export default Login;
