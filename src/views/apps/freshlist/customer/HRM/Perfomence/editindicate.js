import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody ,CardHeader } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { _Put,_Get} from '../../../../../../ApiEndPoint/ApiCalling';
import {HRM_UPDATE_INDICATOR,HRM_INDICATOR_BY_ID  } from '../../../../../../ApiEndPoint/Api';

const EditIndicatform = () => {
  const [data, setData] = useState({
    employee: '',
    name: '',
    designation: '',
    department: '',
    attendance: '',
    target: '',
    collections: '',
  });

  
  const { id } = useParams();
  const history = useHistory();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _Get(HRM_INDICATOR_BY_ID, id);
        console.log(response)
        setData(response?.Indicator);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await _Put(HRM_UPDATE_INDICATOR, id, data);
      history.push('/app/ajgroup/HRM/indicatList');

    } catch (error) {
      console.log(error);
    }
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
    <Col sm="12" md="7" className="mx-auto">
      <Card>
      <CardHeader>
      <h1>Indicator Edit Form</h1>
            <Button color="danger" onClick={handleBack}>
              Back
            </Button>
          </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
          
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="employee">Employee:</Label>
                  <Input
                    
                    type="text"
                    placeholder="Employee"
                    name="employee"
                    id="employee"
                    value={data.employee}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input
                   
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="designation">Designation:</Label>
                  <Input
         
                    type="text"
                    placeholder="Designation"
                    name="designation"
                    id="designation"
                    value={data.designation}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="department">Department:</Label>
                  <Input
                 
                    type="text"
                    placeholder="Department"
                    name="department"
                    id="department"
                    value={data.department}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
            <FormGroup>
              <Label for="attendance">Attendance:</Label>
              <Input
             
                type="text"
                placeholder="Attendance"
                name="attendance"
                id="attendance"
                value={data.attendance}
                onChange={handleInputChange}
              />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
              <Label for="target">Target:</Label>
              <Input
              
                type="text"
                placeholder="Target"
                name="target"
                id="target"
                value={data.target}
                onChange={handleInputChange}
              />
            </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <FormGroup>
              <Label for="collections">Collections:</Label>
              <Input
              
                type="text"
                placeholder="Collections"
                name="collections"
                id="collections"
                value={data.collections}
                onChange={handleInputChange}
              />
            </FormGroup>
            </Col>
            </Row>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 10 }}>
                <Button.Ripple color="primary" type="submit" className="mt-2">
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

export default EditIndicatform;




