// import React, { useState } from 'react';
// import { Card, CardBody, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

// const OfferLetterForm = () => {
//   const [formData, setFormData] = useState({
//     candidateName: '',
//     candidateEmail: '',
//     candidateNumber: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Offer Letter Form submitted:', formData);
   
//   };

//   return (
//     <Card>
//       <CardBody>
//         <h2>Offer Letter Form</h2>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup row>
//             <Label for="candidateName" sm={4}>
//               Candidate Name:
//             </Label>
//             <Col sm={8}>
//               <Input
//                 type="text"
//                 name="candidateName"
//                 id="candidateName"
//                 value={formData.candidateName}
//                 onChange={handleInputChange}
//                 placeholder="Enter Name"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="candidateEmail" sm={4}>
//               Candidate Email:
//             </Label>
//             <Col sm={8}>
//               <Input
//                 type="email"
//                 name="candidateEmail"
//                 id="candidateEmail"
//                 value={formData.candidateEmail}
//                 onChange={handleInputChange}
//                 placeholder="Enter email"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="candidateNumber" sm={4}>
//               Candidate Phone Number:
//             </Label>
//             <Col sm={8}>
//               <Input
//                 type="tel"
//                 name="candidateNumber"
//                 id="candidateNumber"
//                 value={formData.candidateNumber}
//                 onChange={handleInputChange}
//                 placeholder="Enter Phone Number"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Col sm={{ size: 8, offset: 4 }}>
//               <Button color="primary" type="submit">
//                 Create Offer Letter
//               </Button>
//             </Col>
//           </FormGroup>
//         </Form>
//       </CardBody>
//     </Card>
//   );
// };

// export default OfferLetterForm;

import React, { useState } from 'react';
import { Card, CardBody, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Hrm_offerGroup } from '../../../../../../ApiEndPoint/Api';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { useHistory } from 'react-router-dom';


const OfferLetterForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    mobileNo: '',
  });
  // parameter's : name,email,mobileNo
  const history = useHistory();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await _PostSave(Hrm_offerGroup, data);
        setSuccessAlert(true);
        resetForm();
        history.push('/app/ajgroup/HRM/offerList');
      }
      catch (error) {
        console.log(error);
        setErrorAlert(true);
      }
    } else {
      setErrorAlert(true);
    }
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      mobileNo: '',
    });
  };

  const validateForm = () => {
    return Object.values(data).every((value) => value.trim() !== '');
  };


  return (
    <Card>
      <CardBody>
        <h2>Offer Letter Form</h2>
        {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
        {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
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
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default OfferLetterForm;

