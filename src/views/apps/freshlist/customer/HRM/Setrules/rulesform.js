
import React, { useState } from 'react';
import { Button, Card, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const SetRules = () => {
    const [rule, setRule] = useState('');
    const [calculationType, setCalculationType] = useState('');
    const [inputType, setInputType] = useState('');
    const [calculationValue, setCalculationValue] = useState('');
    const [value, setValue] = useState('');
    const [durationType, setDurationType] = useState('');
    const [title, setTitle] = useState('');
    const [target, setTargetType] = useState('');
    const [bonusType, setInputBonusType] = useState('');
    const [loanType, setLoanType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Rule:', rule);
        console.log('Calculation Type:', calculationType);
        console.log('Input Type:', inputType);
        console.log('Calculation Value:', calculationValue);
        console.log('Duration Type:', durationType);
    };


    const handleTitleChange = (e) => {

        if (title !== e.target.value) {
            setTitle('');
        }
        setTitle(e.target.value);

    };

    const handleRuleChange = (newRule) => {
        setRule(newRule);
        setTitle('');
        setCalculationType('');
        setInputType('');
        setCalculationValue('');
        setDurationType('');
        setValue('');
        setLoanType('');
        setInputBonusType('');
      
    };

    const renderRuleSpecificFields = () => {
        if (rule === 'ALLOWANCE') {
            return (
                <>
                    <FormGroup>
                        <Label for="inputType">Distance</Label>
                        <Input
                            type="text"
                            name="inputType"
                            id="inputType"
                            value={inputType}
                            placeholder="Enter Distance"
                            onChange={(e) => setInputType(e.target.value)}
                        />
                    </FormGroup>

                </>
            );
        }

        if (rule === 'INCENTIVE') {
            return (
                <>
                    <FormGroup>
                        <Label for="targetType">Target Percentage</Label>
                        <Input
                            type="number"
                            name="targetType"
                            id="targetType"
                            value={target}
                            placeholder="Enter Target Percentage"
                            onChange={(e) => setTargetType(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ValueInput"> Target Value</Label>
                        <Input
                            type="number"
                            name="ValueInput"
                            id="ValueInput"
                            value={value}
                            placeholder="Enter Value"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </FormGroup>


                </>
            );
        }

        if (rule === 'LOAN') {
            return (
                <>

                    <FormGroup>
                        <Label for="inputType">Loan Amount</Label>
                        <Input
                            type="number"
                            name="inputType"
                            id="inputType"
                            value={loanType}
                            placeholder="Enter Loan Amount"
                            onChange={(e) => setLoanType(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="durationTypeDropdown">Time Period</Label>
                        <Input
                            type="select"
                            name="durationType"
                            id="durationTypeDropdown"
                            value={durationType}
                            onChange={(e) => setDurationType(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>

                        </Input>
                    </FormGroup>
                </>
            );
        }

        if (rule === 'BONUS') {
            return (
                <>
                    <FormGroup>
                        <Label for="inputType">Bonus Amount</Label>
                        <Input
                            type="number"
                            name="inputType"
                            id="inputType"
                            value={bonusType}
                            placeholder="Enter Bonus Amount"
                            onChange={(e) => setInputBonusType(e.target.value)}
                        />
                    </FormGroup>


                </>
            );
        }

        if (['ACTUAL (BILL)', 'PF', 'OVERTIME', 'ADVANCE', 'EMI'].includes(rule)) {
            return (
                <>
                    {/* <FormGroup>
                        <Label for="calculationTypeDropdown">Calculation Type</Label>
                        <Input
                            type="select"
                            name="calculationType"
                            id="calculationTypeDropdown"
                            value={calculationType}
                            onChange={(e) => setCalculationType(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="percentage">Percentage</option>
                            <option value="fixed">Fixed</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="calculationValueInput">Calculation Value</Label>
                        <Input
                            type="number"
                            name="calculationValue"
                            id="calculationValueInput"
                            value={calculationValue}
                            placeholder="Enter Calculation Value"
                            onChange={(e) => setCalculationValue(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="durationTypeDropdown">Duration Type</Label>
                        <Input
                            type="select"
                            name="durationType"
                            id="durationTypeDropdown"
                            value={durationType}
                            onChange={(e) => setDurationType(e.target.value)}

                        >
                            <option value="">Select</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="daily">Daily</option>
                            <option value="one-time">One Time</option>

                        </Input>
                    </FormGroup> */}
                </>
            );
        }

        return null;
    };

    return (
        <Row>
            <Col sm="12" md="6" className="mx-auto">
                <Card>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <h1>Set Rules</h1>


                            <FormGroup>
                                <Label for="ruleDropdown">Rule</Label>
                                <Input
                                    type="select"
                                    name="Rule"
                                    id="ruleDropdown"
                                    value={rule}
                                    onChange={(e) => handleRuleChange(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="ALLOWANCE">ALLOWANCE</option>
                                    <option value="INCENTIVE">INCENTIVE</option>
                                    <option value="LOAN">LOAN</option>
                                    <option value="BONUS">BONUS</option>
                                    <option value="ACTUAL (BILL)">ACTUAL (BILL)</option>
                                    <option value="PF">PF</option>
                                    <option value="OVERTIME">OVERTIME</option>
                                    <option value="ADVANCE">ADVANCE</option>
                                    <option value="EMI">EMI</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    placeholder="Enter title..."
                                    onChange={handleTitleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="calculationTypeDropdown">Calculation Type</Label>
                                <Input
                                    type="select"
                                    name="calculationType"
                                    id="calculationTypeDropdown"
                                    value={calculationType}
                                    onChange={(e) => setCalculationType(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="percentage">Percentage</option>
                                    <option value="fixed">Fixed</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="calculationValue">Calculation Value</Label>
                                <Input
                                    type="number"
                                    name="calculationValue"
                                    id="calculationValue"
                                    value={calculationValue}
                                    placeholder="Enter Calculation Value"
                                    onChange={(e) => setCalculationValue(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="durationTypeDropdown">Duration Type</Label>
                                <Input
                                    type="select"
                                    name="durationType"
                                    id="durationTypeDropdown"
                                    value={durationType}
                                    onChange={(e) => setDurationType(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                    <option value="daily">Daily</option>
                                    <option value="one-time">One Time</option>
                                </Input>
                            </FormGroup>

                            {renderRuleSpecificFields()}

                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default SetRules;
