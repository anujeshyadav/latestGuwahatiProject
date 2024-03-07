import { useParams, useHistory } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Card, CardBody ,CardHeader,Row,Alert} from 'reactstrap';
import { VIEW_ATTENDANCE_BY_ID, UPDATE_ATTENDANCE } from '../../../../../../ApiEndPoint/Api';
import { _Put, _Get } from '../../../../../../ApiEndPoint/ApiCalling';


const AtteneditForm = () => {
  
  const [data, setData] = useState({
    employee: '',
    date: '',
    hours: '',
    remark: '',
  });

 
  const { id } = useParams();
  const history = useHistory();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _Get(VIEW_ATTENDANCE_BY_ID, id);
        console.log(response)
        setData(response?.Attendance);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    try {
      await _Put(UPDATE_ATTENDANCE, id, data);
      setSuccessAlert(true);
      history.push('/app/ajgroup/HRM/attenList');

    } catch (error) {
      console.log(error);
      setErrorAlert(true);
    }
  } else {
    setErrorAlert(true);
  }
};


const validateForm = () => {
  return Object.values(data).every((value) => value.trim() !== '');
};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBack = () => {
    history.goBack();
  };


  return (
    <Row>
            <Col sm="12" md="6" className="mx-auto">
    <Card>
    <CardHeader>
            <h1>Attendance Edit Form</h1>
            <Button color="danger" onClick={handleBack}>
              Back
            </Button>
          </CardHeader>
      <CardBody>
      {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
      {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
        <Form onSubmit={handleSubmit}>
        
          <FormGroup row>
            <Label for="employee" sm={2}>
              Employee
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="employee"
                id="employee"
                value={data.employee}
                onChange={handleInputChange}
              >
              
                {/* <option value="">Select Employee</option>
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
                <option value="employee4">Employee 4</option> */}
             
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                type="date"
                name="date"
                id="date"
                value={data.date}
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="hours" sm={2}>
              Hours
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                placeholder='Hours'
                name="hours"
                id="hours"
                value={data.hours}
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="remark" sm={2}>
              Remark
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="remark"
                id="remark"
                value={data.remark}
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              {/* <Button type="submit">Submit</Button> */}

              <Button.Ripple
                color="primary"
                type="submit"
                className="mt-2">
                Update
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>

      </CardBody>
    </Card>
    </Col>

    </Row>
  );
};
export default AtteneditForm;












