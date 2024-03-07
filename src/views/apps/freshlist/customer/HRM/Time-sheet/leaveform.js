import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { HRM_SAVE_LEAVE } from '../../../../../../ApiEndPoint/Api';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { useHistory } from 'react-router-dom';

const LeaveForm = () => {
  const [data, setData] = useState({
    employee: '',
    leaveType: '',
    leaveReason: '',
    startDate: '',
    endDate: '',
    hours: '',
    remark: '',
  });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await _PostSave(HRM_SAVE_LEAVE, data);
      resetForm();
      history.push('/app/ajgroup/HRM/leaveList');
    } catch (error) {
      console.log(error);
    }
    console.log('Form submitted:', data);
  };

  const resetForm = () => {
    setData({
      employee: '',
      leaveType: '',
      leaveReason: '',
      startDate: '',
      endDate: '',
      hours: '',
      remark: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Row>
      <Col sm="12" md="7" className="mx-auto">
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <h1>Leave Form</h1>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="employee">Employee Name:</Label>
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
                    <Label for="leaveType">Leave Type:</Label>
                    <Input
                      required
                      type="text"
                      name="leaveType"
                      placeholder="Leave Type"
                      id="leaveType"
                      value={data.leaveType}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="leaveReason">Leave Reason:</Label>
                    <Input
                      required
                      type="text"
                      name="leaveReason"
                      placeholder="Leave Reason"
                      id="leaveReason"
                      value={data.leaveReason}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="hours">Hour:</Label>
                    <Input
                      required
                      type="number"
                      placeholder="Hours"
                      name="hours"
                      id="hours"
                      value={data.hours}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="startDate">Start Date:</Label>
                    <Input
                      required
                      type="date"
                      placeholder="StartDate"
                      name="startDate"
                      id="startDate"
                      value={data.startDate}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="endDate">End Date:</Label>
                    <Input
                      required
                      type="date"
                      placeholder="EndDate"
                      name="endDate"
                      id="endDate"
                      value={data.endDate}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="remark">Remark:</Label>
                <Input
                  required
                  type="textarea"
                  name="remark"
                  id="remark"
                  value={data.remark}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 10, offset: 10}}>
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

export default LeaveForm;
