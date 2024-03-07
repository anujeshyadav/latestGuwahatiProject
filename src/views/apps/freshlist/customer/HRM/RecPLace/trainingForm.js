import React, { useState } from 'react';
import { Card, Row, Col, Form, FormGroup, Label, Alert, Input, Button, CardBody, CardHeader } from 'reactstrap';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { Hrm_TrainGroup } from '../../../../../../ApiEndPoint/Api';
import { useHistory } from 'react-router-dom';
const TrainingForm = () => {
    const [data, setData] = useState({
        branch: '',
        trainer: '',
        trainingType: '',
        trainingCost: '',
        employee: '',
        startDate: '',
        endDate: '',
        description: '',
    });
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    //  parameter's : branch,trainer,employee,trainingType,trainingCost,startDate,endDate,description
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await _PostSave(Hrm_TrainGroup, data);
                console.log(data)
                setSuccessAlert(true);
                history.push('/app/ajgroup/HRM/trainList');
                resetForm();
            } catch (error) {

                console.error(error);
                setErrorAlert(true);
            }
        } else {
            setErrorAlert(true);
        }
    };
    const validateForm = () => {
        return Object.values(data).every((value) => value.trim() !== '');
    };

    const resetForm = () => {
        setData({
            branch: '',
            trainer: '',
            trainingType: '',
            trainingCost: '',
            employee: '',
            startDate: '',
            endDate: '',
            description: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };


    return (

        <Card style={{ width: '60%', marginLeft: '20%' }}>
            <CardHeader>
                <h2>Create Training</h2>
                {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
                {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
            </CardHeader>
            <CardBody style={{ marginLeft: '15%' }}>
                <Row md={10}>
                    <Col md={10}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="branch">Branch</Label>
                                <Input type="select" name="branch" id="branch" value={data?.branch} onChange={handleInputChange}>
                                    <option>Select Branch</option>
                                    <option>Branch 1</option>
                                    <option>Branch 2</option>
                                    <option>Branch 3</option>
                                    {/* Add more branches */}
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="trainer">Trainer</Label>
                                        <Input type="select" name="trainer" id="trainer" value={data?.trainer} onChange={handleInputChange}>
                                            <option>Select Trainer</option>
                                            <option>Internal</option>
                                            <option>Teresa</option>

                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="trainingType">Training Type</Label>
                                        <Input type="text" name="trainingType" id="trainingType" value={data?.trainingType} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="trainingCost">Training Cost</Label>
                                <Input type="text" name="trainingCost" id="trainingCost" value={data?.trainingCost} onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="employee">Employee</Label>
                                <Input type="select" name="employee" id="employee" value={data?.employee} onChange={handleInputChange}>
                                    <option>Select Employee</option>
                                    <option>Employee 1</option>
                                    <option>Employee 2</option>
                                    <option>Employee 3</option>

                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="startDate">Start Date</Label>
                                        <Input type="date" name="startDate" id="startDate" value={data?.startDate} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="endDate">End Date</Label>
                                        <Input type="date" name="endDate" id="endDate" value={data?.endDate} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" id="description" value={data?.description} onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{ size: 8, offset: 4 }}>
                                    <Button color="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default TrainingForm;









