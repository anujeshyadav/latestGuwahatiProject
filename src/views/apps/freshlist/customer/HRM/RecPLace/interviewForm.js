// import React, { useState } from 'react';
// import { Card, CardBody, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { HRM_INTERVIEW } from '../../../../../../ApiEndPoint/Api';
// import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
// const InterviewForm = () => {
//   const [data, setData] = useState({
//     candidateName: '',
//     dateOfInterview: '',
//     interviewTime: '',
//     location: '', // AM or PM
//     status: '',
//   });
//   // candidateName,dateOfInterview,interviewTime,location,status

//   const locations = [
//     'Indore',
//     'Bhopal',
//     'Pune',
    
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(data)
//     await _PostSave(HRM_INTERVIEW, data).then((res) => {
//       console.log(res)
//     }).catch((err) => {
//       console.log(err)
//     })

//   };

//   return (
//     <Card style={{
//       width: '70%',
//      maxWidth: '800px', 
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     marginTop: '10px', 
//     marginLeft:'24%',
//   }}>
//       <CardBody>
//         <h2>Interview Form</h2>
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
//                 value={data.candidateName}
//                 onChange={handleInputChange}
//                 placeholder="Enter Candidate Name"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="interviewDate" sm={4}>
//               Date of Interview:
//             </Label>
//             <Col sm={8}>
//             <Input
//           type="date"
//           name="dateOfInterview"
//           id="dateOfInterview"
//           value={data.dateOfInterview}
//           onChange={handleInputChange}
//           placeholder="Date of Interview"
//         />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="interviewTime" sm={4}>
//               Interview Time:
//             </Label>
//             <Col sm={6}>
//               <Input
//                 type="time"
//                 name="interviewTime"
//                 id="interviewTime"
//                 value={data.interviewTime}
//                 onChange={handleInputChange}
//                 placeholder="Interview Time"
//               />
//             </Col>
//             <Col sm={2}>
//               <Input
//                 type="select"
//                 name="timeOfDay"
//                 id="timeOfDay"
//                 value={data.timeOfDay}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select</option>
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </Input>
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="position" sm={4}>
//               Location:
//             </Label>
//             <Col sm={8}>
//               <Input
//                 type="select"
//                 name="location"
//                 id="location"
//                 value={data.location}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Location</option>
//                 {locations.map((location) => (
//                   <option key={location} value={location}>
//                     {location}
//                   </option>
//                 ))}
//               </Input>
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="status" sm={4}>
//               Status
//             </Label>
//             <Col sm={8}>
//               <Input
//                 type="status"
//                 name="status"
//                 id="status"
//                 value={data.status}
//                 onChange={handleInputChange}
//                 placeholder="status"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Col sm={{ size: 8, offset: 4 }}>
//               <Button color="primary" type="submit">
//                 Submit
//               </Button>
//             </Col>
//           </FormGroup>
//         </Form>
//       </CardBody>
//     </Card>
//   );
// };

// export default InterviewForm;



import React, { useState } from 'react';
import { Card, CardBody, Col, Form, FormGroup, Label, Input, Button, Alert, CardHeader } from 'reactstrap';
import { Hrm_InterviewGroup } from '../../../../../../ApiEndPoint/Api';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { useHistory } from 'react-router-dom';


const InterviewForm = () => {
  const [data, setData] = useState({
    candidateName: '',
    dateOfInterview: '',
    interviewTime: '',
    // position: '',
    location: '',
    status: '',
  });
  // parameter's : candidateName,dateOfInterview,
  // interviewTime,location,status
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const positions = ['Supervisior', 'Product Manager', 'Field Manager'];
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await _PostSave(Hrm_InterviewGroup, data);
        setSuccessAlert(true);
        resetForm();
        history.push('/app/ajgroup/HRM/interviewList');
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

  const resetForm = () => {
    setData({
      candidateName: '',
      dateOfInterview: '',
      interviewTime: '',
      // position: '',
      location: '',
      status: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Card>
      <CardHeader>
        <h2>Interview Form</h2>
        {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
        {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
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
                name="candidateName"
                id="candidateName"
                value={data.candidateName}
                onChange={handleInputChange}
                placeholder="Enter Candidate Name"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="dateOfInterview" sm={4}>
              Date of Interview:
            </Label>
            <Col sm={8}>
              <Input
                type="date"
                name="dateOfInterview"
                id="dateOfInterview"
                value={data.dateOfInterview}
                onChange={handleInputChange}
                placeholder="Date of Interview"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="interviewTime" sm={4}>
              Interview Time:
            </Label>
            <Col sm={6}>
              <Input
                type="time"
                name="interviewTime"
                id="interviewTime"
                value={data.interviewTime}
                onChange={handleInputChange}
                placeholder="Interview Time"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Location" sm={4}>
              Location :
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                name="location"
                id="location"
                value={data.location}
                onChange={handleInputChange}
                placeholder="Enter location"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={4}>
              Status
            </Label>
            <Col sm={8}>
              <Input
                type="select"
                name="status"
                id="status"
                value={data.status}
                onChange={handleInputChange}
              >
                <option value="">Select </option>
                <option value="Active">Active</option>
                <option value="Deative">Deactive</option>
              </Input>
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

export default InterviewForm;

