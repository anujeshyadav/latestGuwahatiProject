import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { HRM_SAVE_INDICATOR } from '../../../../../../ApiEndPoint/Api';

const Indicatform = () => {
  const [data, setData] = useState({
    employee: '',
    name: '',
    designation: '',
    department: '',
    attendance: '',
    target: '',
    collections: '',
  });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await _PostSave(HRM_SAVE_INDICATOR, data);
        resetForm();
        history.push('/app/ajgroup/HRM/indicatList');
    } catch (error) {
        console.log(error);
    }
    console.log('Form submitted:', data);
};

const resetForm = () => {
    setData({
        employee: '',
        name: '',
        designation: '',
        department: '',
        attendance: '',
        target: '',
        collections: '',
    });
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Row>
    <Col sm="12" md="7" className="mx-auto">
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <h1>Indicator Form</h1>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="employee">Employee:</Label>
                  <Input
                    required
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
                    required
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
                    required
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
                    required
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
                required
                type="number"
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
                required
                type="number"
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
                required
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
                  Submit
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

export default Indicatform;




