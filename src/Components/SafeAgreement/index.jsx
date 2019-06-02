import React, { useState, useEffect } from 'react'
import {
    Stepper,
    Step,
    Typography,
    StepLabel,
    StepContent,
    Button,
    RadioGroup,
    RadioButton,
    FormControl,
    FormLabel,
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

function getSteps() {
    return [
        'Choose type of your company:',
        'Does your company have subsidiaries?',
        'Choose type of SAFE:',
        'Choose governing law of agreement (сommonly must be the same as main state of operations of your company):',
    ]
}

const SafeAgreement = () => {
    window.document.title = 'Safe Agreement | DocuSign'
    useEffect(() => {
        return () => {
            window.document.title = 'DocuSign'
        }
    })
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps()

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    function handleReset() {
        setActiveStep(0)
    }

    function handleChange(event) {
        console.log('event.target.value', event.target.value)
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="gender1"
                                className={classes.group}
                                value={'female'}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Delaware corporation I Common"
                                />
                                <FormControlLabel value="male" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 1:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="gender1"
                                className={classes.group}
                                value={'female'}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="No" />
                                <FormControlLabel value="male" control={<Radio />} label="Yes" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="gender1"
                                className={classes.group}
                                value={'female'}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Valuation cap, NO Discount I Most common"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Discount, NO Valuation cap"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Valuation cap AND Discount"
                                />
                                <FormControlLabel
                                    value="male"
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
                                name="gender1"
                                className={classes.group}
                                value={'female'}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Laws of the State of California"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Laws of the State of Delaware I Common compromise version"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Laws of the State of New York I Common compromise version"
                                />
                                <FormControlLabel value="male" control={<Radio />} label="Other" />
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
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
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
