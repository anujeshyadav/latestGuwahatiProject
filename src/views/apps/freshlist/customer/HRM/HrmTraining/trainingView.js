import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, FormGroup, Label, Input, Button, CardBody, CardHeader } from 'reactstrap';
import { useParams, useHistory } from "react-router-dom"
import { Hrm_TrainViewOne, Hrm_TrainUpdate } from '../../../../../../ApiEndPoint/Api';
import { _Get, _Put } from '../../../../../../ApiEndPoint/ApiCalling';

const TrainingViewForm = () => {
    const [data, setData] = useState({
        branch: '',
        trainer: '',
        trainingType: '',
        trainingCost: '',
        employee: '',
        startDate: '',
        endDate: '',
        description: '',
    })
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _Get(Hrm_TrainViewOne, id);
                setData(response.Training);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await _Put(Hrm_TrainUpdate, id, data);
        } catch (error) {
            console.log(error);
        }

    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };
    const handleBack = () => {
        history.goBack();
    }
    return (
        <Card style={{ width: '60%', marginLeft: '20%' }}>
            <CardHeader>
                <h2>Create Training</h2>
                <Button color=" btn btn-danger" type="button" onClick={handleBack}>
                    Back
                </Button>
            </CardHeader>
            <CardBody style={{ marginLeft: '20%' }}>

                <Row md={10}>
                    <Col md={10}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="branch">Branch</Label>
                                <Input readOnly type="select" name="branch" id="branch" value={data.branch} onChange={(e) => setBranch(e.target.value)}>
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
                                        <Input readOnly type="select" name="trainer" id="trainer" value={data.trainer} onChange={(e) => setTrainer(e.target.value)}>
                                            <option>Select Trainer</option>
                                            <option>Internal</option>
                                            <option>Teresa</option>
                                            {/* Add more trainers */}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="trainingType">Training Type</Label>
                                        <Input readOnly type="text" name="trainingType" id="trainingType" value={data.trainingType} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="trainingCost">Training Cost</Label>
                                <Input readOnly type="text" name="trainingCost" id="trainingCost" value={data.trainingCost} onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="employee">Employee</Label>
                                <Input readOnly type="select" name="employee" id="employee" value={data.employee} onChange={handleInputChange}>
                                    <option>Select Employee</option>
                                    <option>Employee 1</option>
                                    <option>Employee 2</option>
                                    <option>Employee 3</option>
                                    {/* Add more employees */}
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="startDate">Start Date</Label>
                                        <Input readOnly type="date" name="startDate" id="startDate" value={data.startDate} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="endDate">End Date</Label>
                                        <Input readOnly type="date" name="endDate" id="endDate" value={data.endDate} onChange={handleInputChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input readOnly type="textarea" name="description" id="description" value={data.description} onChange={handleInputChange} />
                            </FormGroup>
                            {/* <Button type="submit" color="primary">Submit</Button> */}
                        </Form>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default TrainingViewForm;







