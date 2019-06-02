import React, { useState, useEffect } from 'react'
import {
    Stepper,
    Step,
    Typography,
    StepLabel,
    StepContent,
    Button,
    RadioGroup,
    FormControl,
    FormControlLabel,
    Radio,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}))

const defaultOptions = {
    STEP_1: 'option1',
    STEP_2: 'option1',
    STEP_3: 'option1',
    STEP_4: 'option1',
}

const SafeAgreement = ({ onAnswerSelected }) => {
    window.document.title = 'Safe Agreement | DocuSign'
    useEffect(() => {
        return () => {
            window.document.title = 'DocuSign'
        }
    })
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [options, setOption] = useState(defaultOptions)

    const steps = [
        'Choose type of your company:',
        'Does your company have subsidiaries?',
        'Choose type of SAFE:',
        'Choose governing law of agreement (сommonly must be the same as main state of operations of your company):',
    ]

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    function handleFinish() {
        onAnswerSelected(options)
    }

    function handleChange(value) {
        setOption({ ...options, ...value })
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step1"
                                className={classes.group}
                                value={options.STEP_1}
                                onChange={e => handleChange({ STEP_1: e.target.value })}
                            >
                                <FormControlLabel
                                    value="option1"
                                    control={<Radio />}
                                    label="Delaware corporation | Common"
                                />
                                <FormControlLabel
                                    value="option2"
                                    control={<Radio />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 1:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step2"
                                className={classes.group}
                                value={options.STEP_2}
                                onChange={e => handleChange({ STEP_2: e.target.value })}
                            >
                                <FormControlLabel value="option1" control={<Radio />} label="No" />
                                <FormControlLabel value="option2" control={<Radio />} label="Yes" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step3"
                                className={classes.group}
                                value={options.STEP_3}
                                onChange={e => handleChange({ STEP_3: e.target.value })}
                            >
                                <FormControlLabel
                                    value="option1"
                                    control={<Radio />}
                                    label="Valuation cap, NO Discount I Most common"
                                />
                                <FormControlLabel
                                    value="option2"
                                    control={<Radio />}
                                    label="Discount, NO Valuation cap"
                                />
                                <FormControlLabel
                                    value="option3"
                                    control={<Radio />}
                                    label="Valuation cap AND Discount"
                                />
                                <FormControlLabel
                                    value="option4"
                                    control={<Radio />}
                                    label="MFN, NO Valuation cap, NO Discount"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_4}
                                onChange={e => handleChange({ STEP_4: e.target.value })}
                            >
                                <FormControlLabel
                                    value="option1"
                                    control={<Radio />}
                                    label="Laws of the State of California"
                                />
                                <FormControlLabel
                                    value="option2"
                                    control={<Radio />}
                                    label="Laws of the State of Delaware I Common compromise version"
                                />
                                <FormControlLabel
                                    value="option3"
                                    control={<Radio />}
                                    label="Laws of the State of New York I Common compromise version"
                                />
                                <FormControlLabel
                                    value="option4"
                                    control={<Radio />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            default:
                return 'Unknown step - something went wrong =/'
        }
    }

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    {activeStep !== steps.length - 1 && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            Next
                                        </Button>
                                    )}

                                    {activeStep === steps.length - 1 && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleFinish}
                                            className={classes.button}
                                        >
                                            Finish
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default SafeAgreement
