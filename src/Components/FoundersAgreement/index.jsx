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

    const STEP_1 = {
        QUESTION: 'Have you already incorporated a company?',
    }

    const STEP_2 = {
        QUESTION: 'Choose type of your company:',
    }

    const STEP_3 = {
        QUESTION: 'Choose number of Founders:',
    }
    const STEP_4 = {
        QUESTION: 'How will Founders pay for Company shares?',
    }
    const STEP_5 = {
        QUESTION: 'Do Founders have an equal ownership in Company?',
    }
    const STEP_6 = {
        QUESTION: 'Will a portion of shares be reserved for the future employees?',
    }
    const STEP_7 = {
        QUESTION: 'Do you want to specify each Founder’s position/title?',
    }
    const STEP_8 = {
        QUESTION: 'Do you want to add separate description of responsibilities for each Founder?',
    }
    const STEP_9 = {
        QUESTION: 'Who will have a final vote over product/hiring process?',
    }
    const STEP_10 = {
        QUESTION: 'Choose Founder 1 position/title:',
    }
    const STEP_11 = {
        QUESTION: 'Choose Founder 2 position/title:',
    }
    const STEP_12 = {
        QUESTION: 'Would you like to include a vesting schedule?',
    }
    const STEP_13 = {
        QUESTION: 'Choose vesting schedule:',
    }
    const STEP_14 = {
        QUESTION:
            'Do you want to add Non-Competition clause (prohibiting Founders to work on the potential or existing competitors)?',
    }
    const STEP_15 = {
        QUESTION: 'Choose period for non-competition after Founder’s departure from Company:',
    }
    const STEP_16 = {
        QUESTION:
            'Choose actions that require unanimous prior written approval of all Founders (recommended to choose all):',
    }
    const STEP_17 = {
        QUESTION: 'Do you want to provide mediation as a means for resolving disputes?',
    }
    const STEP_18 = {
        QUESTION: 'What would be the primary dispute resolution venue?',
    }
    const STEP_19 = {
        QUESTION:
            'Choose governing law of agreement (сommonly must be the same as main state of operations of your company):',
    }
    const steps = [
        STEP_1.QUESTION,
        STEP_2.QUESTION,
        STEP_3.QUESTION,
        STEP_4.QUESTION,
        STEP_5.QUESTION,
        STEP_6.QUESTION,
        STEP_7.QUESTION,
        STEP_8.QUESTION,
        STEP_9.QUESTION,
        STEP_10.QUESTION,
        STEP_11.QUESTION,
        STEP_12.QUESTION,
        STEP_13.QUESTION,
        STEP_14.QUESTION,
        STEP_15.QUESTION,
        STEP_16.QUESTION,
        STEP_17.QUESTION,
        STEP_18.QUESTION,
        STEP_19.QUESTION,
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
