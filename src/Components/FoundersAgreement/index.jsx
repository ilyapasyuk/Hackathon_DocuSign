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
    STEP_1: '1',
    STEP_2: '1',
    STEP_3: '1',
    STEP_4: '1',
    STEP_5: '1',
    STEP_6: '1',
    STEP_7: '1',
    STEP_8: '1',
    STEP_9: '1',
    STEP_10: '1',
    STEP_11: '1',
    STEP_12: '1',
    STEP_13: '1',
    STEP_14: '1',
    STEP_15: '1',
    STEP_16: '1',
    STEP_17: '1',
    STEP_18: '1',
    STEP_19: '1',
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
        OPTIONS: [
            {
                id: '1',
                title: 'Yes',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }

    const STEP_2 = {
        QUESTION: 'Choose type of your company:',
        OPTIONS: [
            {
                id: '1',
                title: 'Delaware corporation | Common',
            },
            {
                id: '2',
                title: 'Other',
            },
        ],
    }

    const STEP_3 = {
        QUESTION: 'Choose number of Founders:',
        OPTIONS: [
            {
                id: '1',
                title: 'Two',
            },
        ],
    }
    const STEP_4 = {
        QUESTION: 'How will Founders pay for Company shares?',
        OPTIONS: [
            {
                id: '1',
                title: 'Only with Founder’s IP rights to product | Common',
            },
            {
                id: '2',
                title: 'With IP rights and cash contributions',
            },
        ],
    }
    const STEP_5 = {
        QUESTION: 'Do Founders have an equal ownership in Company?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_6 = {
        QUESTION: 'Will a portion of shares be reserved for the future employees?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes | recommended as a benefit plan',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_7 = {
        QUESTION: 'Do you want to specify each Founder’s position/title?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_8 = {
        QUESTION: 'Do you want to add separate description of responsibilities for each Founder?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_9 = {
        QUESTION: 'Who will have a final vote over product/hiring process?',
        OPTIONS: [
            {
                id: '1',
                title: 'Founder 1',
            },
            {
                id: '2',
                title: 'Founder 2',
            },
        ],
    }
    const STEP_10 = {
        QUESTION: 'Choose Founder 1 position/title:',
        OPTIONS: [
            {
                id: '1',
                title: 'CEO',
            },
            {
                id: '2',
                title: 'CTO',
            },
            {
                id: '3',
                title: 'Director',
            },
            {
                id: '4',
                title: 'Secretary',
            },
            {
                id: '5',
                title: 'Chairman of the Board',
            },
            {
                id: '6',
                title: 'Member of the Board',
            },
            {
                id: '7',
                title: 'Officer',
            },
        ],
    }
    const STEP_11 = {
        QUESTION: 'Choose Founder 2 position/title:',
        OPTIONS: [
            {
                id: '1',
                title: 'CEO',
            },
            {
                id: '2',
                title: 'CTO',
            },
            {
                id: '3',
                title: 'Director',
            },
            {
                id: '4',
                title: 'Secretary',
            },
            {
                id: '5',
                title: 'Chairman of the Board',
            },
            {
                id: '6',
                title: 'Member of the Board',
            },
            {
                id: '7',
                title: 'Officer',
            },
        ],
    }
    const STEP_12 = {
        QUESTION: 'Would you like to include a vesting schedule?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes | recommended, unless you want to specify it elsewhere',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_13 = {
        QUESTION: 'Choose vesting schedule:',
        OPTIONS: [
            {
                id: '1',
                title: 'Typical vesting schedule, lasts four years with one year cliff',
            },
            {
                id: '2',
                title: 'Vesting schedule, which lasts four years without cliff',
            },
            {
                id: '3',
                title:
                    'Vesting schedule with a cliff, but with credit in recognition of contributions to Company',
            },
            {
                id: '4',
                title: 'Vesting schedule with a cliff and a change of ownership accelerator clause',
            },
        ],
    }
    const STEP_14 = {
        QUESTION:
            'Do you want to add Non-Competition clause (prohibiting Founders to work on the potential or existing competitors)?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes | recommended',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_15 = {
        QUESTION: 'Choose period for non-competition after Founder’s departure from Company:',
        OPTIONS: [
            {
                id: '1',
                title: '24 months',
            },
            {
                id: '2',
                title: '18 months',
            },
            {
                id: '3',
                title: '12 months | Common',
            },
            {
                id: '4',
                title: '6 months',
            },
        ],
    }
    const STEP_16 = {
        QUESTION:
            'Choose actions that require unanimous prior written approval of all Founders (recommended to choose all):',
        OPTIONS: [
            {
                id: '1',
                title: 'Incurring debt on Company’s behalf',
            },
            {
                id: '2',
                title: 'Initiating bankruptcy',
            },
            {
                id: '3',
                title: 'Liquidating Company',
            },
            {
                id: '4',
                title: 'Transferring Company’s intellectual property',
            },
            {
                id: '5',
                title: 'Approving any contract with a Founder or affiliate persons',
            },
            {
                id: '6',
                title: 'Raising equity capital for Company',
            },
            {
                id: '7',
                title: 'Distributing Company’s profits',
            },
            {
                id: 8,
                title: 'Admitting new shareholders',
            },
            {
                id: '9',
                title: 'Amending this agreement',
            },
        ],
    }
    const STEP_17 = {
        QUESTION: 'Do you want to provide mediation as a means for resolving disputes?',
        OPTIONS: [
            {
                id: '1',
                title: 'Yes | recommended to settle matters amicably',
            },
            {
                id: '2',
                title: 'No',
            },
        ],
    }
    const STEP_18 = {
        QUESTION: 'What would be the primary dispute resolution venue?',
        OPTIONS: [
            {
                id: '1',
                title: 'Court | more common',
            },
            {
                id: '2',
                title: 'Arbitration I less common, but confidential and efficient',
            },
        ],
    }
    const STEP_19 = {
        QUESTION:
            'Choose governing law of agreement (сommonly must be the same as main state of operations of your company):',
        OPTIONS: [
            {
                id: '1',
                title: 'Laws of the State of California',
            },
            {
                id: '2',
                title: 'Laws of the State of Delaware I Common compromise version',
            },
            {
                id: '3',
                title: 'Laws of the State of New York I Common compromise version',
            },
            {
                id: '4',
                title: 'Other',
            },
        ],
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
        console.log('%c value ', 'color: white; background-color: #2274A5', value)
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
                                {STEP_1.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
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
                                {STEP_2.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
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
                                {STEP_3.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
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
                                {STEP_4.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_5}
                                onChange={e => handleChange({ STEP_5: e.target.value })}
                            >
                                {STEP_5.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_6}
                                onChange={e => handleChange({ STEP_6: e.target.value })}
                            >
                                {STEP_6.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 6:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_7}
                                onChange={e => handleChange({ STEP_7: e.target.value })}
                            >
                                {STEP_7.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 7:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_8}
                                onChange={e => handleChange({ STEP_8: e.target.value })}
                            >
                                {STEP_8.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 8:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_9}
                                onChange={e => handleChange({ STEP_9: e.target.value })}
                            >
                                {STEP_9.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 9:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_10}
                                onChange={e => handleChange({ STEP_10: e.target.value })}
                            >
                                {STEP_10.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 10:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_11}
                                onChange={e => handleChange({ STEP_11: e.target.value })}
                            >
                                {STEP_11.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 11:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_12}
                                onChange={e => handleChange({ STEP_12: e.target.value })}
                            >
                                {STEP_12.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 12:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_13}
                                onChange={e => handleChange({ STEP_13: e.target.value })}
                            >
                                {STEP_13.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 13:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_14}
                                onChange={e => handleChange({ STEP_14: e.target.value })}
                            >
                                {STEP_14.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 14:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_15}
                                onChange={e => handleChange({ STEP_15: e.target.value })}
                            >
                                {STEP_15.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 15:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_16}
                                onChange={e => handleChange({ STEP_16: e.target.value })}
                            >
                                {STEP_16.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 16:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_17}
                                onChange={e => handleChange({ STEP_17: e.target.value })}
                            >
                                {STEP_17.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 17:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_18}
                                onChange={e => handleChange({ STEP_18: e.target.value })}
                            >
                                {STEP_18.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
            case 18:
                return (
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="step4"
                                className={classes.group}
                                value={options.STEP_19}
                                onChange={e => handleChange({ STEP_19: e.target.value })}
                            >
                                {STEP_19.OPTIONS.map(o => (
                                    <FormControlLabel
                                        value={o.id}
                                        control={<Radio />}
                                        label={o.title}
                                    />
                                ))}
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
