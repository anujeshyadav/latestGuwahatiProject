import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Form, CardBody, Card, CardHeader } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";
import { Hrm_SkillViewOne, Hrm_SkillUpdate } from '../../../../../../ApiEndPoint/Api';
import { _Put, _Get } from '../../../../../../ApiEndPoint/ApiCalling';
const PracticsViewform = () => {
  const [answerType, setAnswerType] = useState('');
  const [data, setData] = useState({
    question: '',
    option: '',
    desc: '',
  });
  const { id } = useParams();
  const history = useHistory();
  // parameter's : question,option ,rightAnswer,desc
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _Get(Hrm_SkillViewOne, id);
        setData(response?.Question)
        if (!!response?.Question?.desc) {
          setAnswerType("description")
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await _Put(Hrm_SkillUpdate, id, data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    if (name === 'option') {
      setAnswerType(value);
    }
  };
  const handleBack = () => {
    history.goBack();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <h2> Skills Question Form</h2>
          <Button color="btn btn-danger" type='button' onClick={handleBack}>Back</Button>
        </CardHeader>
        <CardBody>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Input Type Question</Label>
                <Input readOnly type="text" name="question" id="question" placeholder="Enter your question" value={data?.question} onChange={handleInputChange} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">Answer Type</Label>
                <Input readOnly type="text" name="option" id="option" value={data?.option} onChange={handleInputChange}>
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Description">Description</option>
                </Input>
              </FormGroup>
              {answerType === "description" && (
                <FormGroup>
                  <Label for="exampleTextarea">Description</Label>
                  <Input readOnly type="textarea" name="desc" id="desc" value={data?.desc} onChange={handleInputChange} />
                </FormGroup>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Form>
  );
};

export default PracticsViewform;
