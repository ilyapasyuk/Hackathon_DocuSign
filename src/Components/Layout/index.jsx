import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Container, AppBar, Typography, Toolbar } from '@material-ui/core'
import SafeAgreement from '../SafeAgreement'
import Documents from '../Documents'
import './style.css'
import SafeAgreementPreview from 'Components/SafeAgreementPreview'

const Layout = ({}) => {
    const [isShowHeader, setShowShowHeader] = useState(false)
    const [isShowSafeAgreement, setShowSafeAgreement] = useState(false)
    const [isShowSafeAgreementPreview, setShowSafeAgreementPreview] = useState(true)
    const [optionsSafeAgreement, setSafeAgreementAnswers] = useState({})

    function handleSafeAgreement(value) {
        setSafeAgreementAnswers(value)
        setShowSafeAgreement(false)
        setShowSafeAgreementPreview(true)
    }

    function handleDocumentSelect() {
        setShowSafeAgreement(true)
        setShowShowHeader(false)
    }

    return (
        <>
            <AppBar position="static" className="Layout__appbar">
                <Toolbar>
                    <Typography variant="h6">DocuSign Hackhaton</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {isShowHeader && (
                    <>
                        <Typography variant="h2" color="primary" align="center" gutterBottom>
                            Free legal documents for startups
                        </Typography>
                        <Typography variant="h4" align="center" gutterBottom>
                            Choose a document to draft
                        </Typography>

                        <Documents onSelectDocument={() => handleDocumentSelect()} />
                    </>
                )}

                {isShowSafeAgreement && (
                    <SafeAgreement onAnswerSelected={v => handleSafeAgreement(v)} />
                )}

                {isShowSafeAgreementPreview && (
                    <SafeAgreementPreview options={optionsSafeAgreement} />
                )}
            </Container>
        </>
    )
}

export default hot(Layout)
