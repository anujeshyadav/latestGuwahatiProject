import React, { useState, useEffect } from 'react';
import { Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, CardHeader } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { Hrm_OfferUpdate, Hrm_OfferViewone } from '../../../../../../ApiEndPoint/Api';
import { _Get, _Put } from '../../../../../../ApiEndPoint/ApiCalling';
const OfferEditlist = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        mobileNo: '',
    });
    // parameter's : name,email,mobileNo

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _Get(Hrm_OfferViewone, id);
                setData(response.OfferLetter);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await _Put(Hrm_OfferUpdate, id, data);
            history.push('/app/ajgroup/HRM/offerList')
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
        <Card>
            <CardHeader>
                <h2>Offer Letter Form</h2>
                <Button color=" btn btn-danger" type="button" onClick={handleBack}>
                    Back
                </Button>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label for="candidateName" sm={4}>
                            Candidate Name:
                        </Label>
                        <Col sm={8}>
                            <Input

                                type="text"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={handleInputChange}
                                placeholder="Enter Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="candidateEmail" sm={4}>
                            Candidate Email:
                        </Label>
                        <Col sm={8}>
                            <Input
                              
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="candidateNumber" sm={4}>
                            Candidate Phone Number:
                        </Label>
                        <Col sm={8}>
                            <Input
                                
                                type="number"
                                name="mobileNo"
                                id="mobileNo"
                                value={data.mobileNo}
                                onChange={handleInputChange}
                                placeholder="Enter Phone Number"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 8, offset: 4 }}>
                            <Button color="primary" type="submit">
                                Update
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
};
export default OfferEditlist;
