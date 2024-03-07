import React, { useState,useEffect } from 'react';
import { Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Hrm_SalaryGroup } from '../../../../../../ApiEndPoint/Api';
import { _PostSave , _GetList} from '../../../../../../ApiEndPoint/ApiCalling';
import { useHistory } from 'react-router-dom';
import { country_state_City_List } from '../../../../../../ApiEndPoint/Api';

const EmployeeProfileForm = () => {
  const [data, setData] = useState({
    employeeName: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    country: '',
    pincode: '', 
    district: '', 
    state: '',
  });
  

  const history = useHistory();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [Country_State_city, setCountry_State_city] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await _PostSave(Hrm_SalaryGroup, data);
        setSuccessAlert(true);
        resetForm();
        history.push('/app/ajgroup/HRM/empList');
      }
      catch (error) {
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

  const resetForm = () => {
    setData({
      employeeName: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      city: '',
      country: '',
      pincode: '',  
      district: '', 
      state: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const fetchLocationDetails = async () => {
    try {
      // const response = await fetch(`API_ENDPOINT_TO_GET_LOCATION_DETAILS?pincode=${data.pincode}`);
      const res = await _GetList(country_state_City_List, data.pincode);
        setCountry_State_city(res);
      
      if (res && res.success) {
        setData({
          ...data,
          district: result.district,
          state: result.state,
        });
      }
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };


  useEffect(() => {
    if (data.pincode.trim() !== '') {
      fetchLocationDetails();
    }
  }, [data.pincode]);


  return (
    <Row>
    <Col sm="12" md="6" className="mx-auto">
    <Card>
      <CardBody>
      {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
      {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
      <h2>Employee Profile Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="employeeName">Employee Name:</Label>
                <Input
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  value={data.employeeName}
                  onChange={handleInputChange}
                  placeholder="Enter employee name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={data.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={data.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address:</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={data.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone.No:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City:</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={handleInputChange}
                  placeholder="Enter city"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="country">Country:</Label>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  value={data.country}
                  onChange={handleInputChange}
                  placeholder="Enter country"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="pincode">Pin Code:</Label>
                    <Input
                      type="number"
                      name="pincode"
                      id="pincode"
                      value={data.pincode}
                      placeholder="Enter pin code"
                      onChange={(e) => {
                        const enteredPincode = e.target.value;
                        setData((prevData) => ({
                          ...prevData,
                          pincode: enteredPincode,
                        }));

                        let selectedCity = Country_State_city?.filter(
                          (city) => city?.pincode === enteredPincode
                        );
                       
                        if (selectedCity?.length) {
                          setData((prevData) => ({
                            ...prevData,
                            district: selectedCity[0]?.district,
                            state: selectedCity[0]?.state,
                          }));
                        } 
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="district">District:</Label>
                    <Input
                      type="text"
                      name="district"
                      id="district"
                      value={data.district}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="state">State:</Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      value={data.state}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
          <Row>
                <Col lg="12" md="12" sm="12">
                  <Label>OR</Label>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <FormGroup>
                    <Label>Bulk Import</Label>

                    <Input
                      className="form-control"
                      type="file"
                      placeholder=""
                      name="BulkImport"
                      onChange={(e) => {
                        setBulkImport(e.target.files[0]);
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
          <FormGroup row>
            <Col sm={{ size: 8, offset: 4 }}>
              <Button color="primary" type="submit">
                Create Employee Profile
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
    </Col>
    </Row>
  );
};

export default EmployeeProfileForm;

