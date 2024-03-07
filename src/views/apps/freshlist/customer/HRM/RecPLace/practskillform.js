// import React, { useState } from 'react';
// import { Card, CardBody, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const MockTestForm = () => {
//   const [formData, setFormData] = useState({
//     question: '',
//     isRequired: '',
//     descriptiveAnswer: '',
//   });

//   const [modal, setModal] = useState(false);

//   const toggleModal = () => setModal(!modal);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // You can add additional logic or API calls here
//     // Close the modal after submission
//     toggleModal();
//   };

//   return (
//     <div>
//       <Button color="primary" onClick={toggleModal}>
//         Open Form
//       </Button>
//       <Modal isOpen={modal} toggle={toggleModal}>
//         <ModalHeader toggle={toggleModal}>Create New Custom Question</ModalHeader>
//         <ModalBody>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="question">Question</Label>
//               <Input
//                 type="textarea"
//                 name="question"
//                 id="question"
//                 value={formData.question}
//                 onChange={handleInputChange}
//                 placeholder="Enter question"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="isRequired">Is Required</Label>
//               <Input
//                 type="select"
//                 name="isRequired"
//                 id="isRequired"
//                 value={formData.isRequired}
//                 onChange={handleInputChange}
//               >
//                 <option value="No">No</option>
//                 <option value="Yes">Yes</option>
//                 <option value="Descriptive">Descriptive</option>
//               </Input>
//             </FormGroup>
//             {formData.isRequired === 'Descriptive' && (
//               <FormGroup>
//                 <Label for="descriptiveAnswer">Descriptive Answer</Label>
//                 <Input
//                   type="textarea"
//                   name="descriptiveAnswer"
//                   id="descriptiveAnswer"
//                   value={formData.descriptiveAnswer}
//                   onChange={handleInputChange}
//                   placeholder="Enter descriptive answer"
//                 />
//               </FormGroup>
//             )}
//             <Button color="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggleModal}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default MockTestForm;

import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Form, CardBody, Card, CardHeader, Alert } from 'reactstrap';
import { Hrm_SkillGroup } from '../../../../../../ApiEndPoint/Api';
import { _PostSave } from '../../../../../../ApiEndPoint/ApiCalling';
import { useHistory } from 'react-router-dom';

const MockTestForm = () => {
  const [answerType, setAnswerType] = useState('');
  const [data, setData] = useState({
    question: '',
    option: '',
  });
  // parameter's : question,option ,rightAnswer,desc
  const history = useHistory();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await _PostSave(Hrm_SkillGroup, data);
        setSuccessAlert(true);
        resetForm();
        history.push('/app/ajgroup/HRM/practiceList');
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
      question: '',
      option: '',
      desc: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    if (name === 'option') {
      setAnswerType(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <h2> Skills Question Form</h2>
          {successAlert && <Alert color="success">Form submitted successfully!</Alert>}
          {errorAlert && <Alert color="danger">Please fill all fields before submitting the form.</Alert>}
        </CardHeader>
        <CardBody>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Input Type Question</Label>
                <Input type="text" name="question" id="question" placeholder="Enter your question" value={data?.question} onChange={handleInputChange} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">Answer Type</Label>
                <Input type="select" name="option" id="option" value={data?.option} onChange={handleInputChange}>
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="description">Description</option>
                </Input>
              </FormGroup>
              {answerType === "description" && (
                <FormGroup>
                  <Label for="exampleTextarea">Description</Label>
                  <Input type="textarea" name="desc" id="desc" value={data?.desc} onChange={handleInputChange} />
                </FormGroup>
              )}
            </Col>
          </Row>
          <Button color="primary">Submit</Button>
        </CardBody>
      </Card>
    </Form>
  );
};

export default MockTestForm;


