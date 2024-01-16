import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";

const AddPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [categories, setCategories] = useState([]);

  const [post, setPOst] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const config = {
    placeholder: "start typing..", readonly: false, 
    minHeight: 200
  };

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fieldChanged = (event) => {
    setPOst({ ...post, title: event.target.value });
  };

  return (
    <div className="wrapper">
      <Card style={{ marginTop: "4rem" }} className="shadow-sm border-0 mt-2">
        <CardBody style={{ marginTop: "4rem" }}>
          {JSON.stringify(post)}
          <h3>What's in your mind</h3>
          <Form>
            <div
              className="my-3"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
            >
              <Label for="title"> Post Title </Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Here"
                className="rounded-0"
                name="title"
                onChange={fieldChanged}
              />
            </div>
            <div
              className="my-3"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
            >
              <Label for="content"> Post Content </Label>
              {/*}  <Input
            type="textarea"
            id="content"
            placeholder="Enter Here"
            className="rounded-0"
            style={{ height: "200px" }}
  /> */}
              <JoditEditor
                ref={editor}
                value={content}
                config={config} // Add the configuration object here
                onChange={(newContent) => setContent(newContent)}
              />
            </div>
            <div
              className="my-3"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
            >
              <Label for="category"> Post Category </Label>
              <Input type="select" id="category" className="rounded-0">
                <option>Programming</option>
                <option>Bollywood</option>
                <option>Mathematics</option>
              </Input>
            </div>

            <Container className="text-center">
              <Button color="primary" className="rounded-0">
                Create Post
              </Button>
              <Button color="danger" className="rounded-0 ms-2">
                Reset Content
              </Button>
            </Container>
          </Form>

          {content}
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
