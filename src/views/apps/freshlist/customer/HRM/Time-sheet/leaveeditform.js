import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, CardHeader } from 'reactstrap';
import { HRM_LEAVE_BY_ID, HRM_UPDATE_LEAVE } from '../../../../../../ApiEndPoint/Api';
import { _Put, _Get } from '../../../../../../ApiEndPoint/ApiCalling';
import { useParams, useHistory } from 'react-router-dom';

const LeaveEditForm = () => {
  const [data, setData] = useState({
    employee: '',
    leaveType: '',
    leaveReason: '',
    startDate: '',
    endDate: '',
    hours: '',
    remark: '',
  });

  const { id } = useParams();
  const history = useHistory();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await _Get(HRM_LEAVE_BY_ID, id);
        console.log(response)
        setData(response?.Leave);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await _Put(HRM_UPDATE_LEAVE, id, data);
      history.push('/app/ajgroup/HRM/leaveList');
    } catch (error) {
      console.log(error);
    }

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBack=()=>{
    history.goBack();
  }

  return (
    <Row>
      <Col sm="12" md="7" className="mx-auto">
      <Card>
        <CardHeader>
        <h1>Leave Edit Form</h1>
        <Button color="danger" onClick={handleBack}>
          Back
        </Button>
        </CardHeader>
        
          <CardBody>
            <Form onSubmit={handleSubmit}>
              
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="employee">Employee Name:</Label>
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
                    <Label for="leaveType">Leave Type:</Label>
                    <Input

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

                  type="textarea"
                  name="remark"
                  id="remark"
                  value={data.remark}
                  onChange={handleInputChange}
                />
              </FormGroup>
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

export default LeaveEditForm;
