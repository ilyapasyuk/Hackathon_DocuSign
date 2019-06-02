import React, { useState } from 'react'
import './style.css'
import { Container, AppBar, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SafeAgreement from '../SafeAgreement'
import Documents from '../Documents'

const useStyles = makeStyles({
    card: {},
    media: {
        height: 140,
    },
})

const Layout = ({}) => {
    const [questions, setQuestions] = useState({})
    const [isShowFoundersAgreement, setShowFoundersAgreement] = useState(false)
    return (
        <>
            <AppBar position="static" className="Layout__appbar">
                <Toolbar>
                    <Typography variant="h6">DocuSign Hackhaton</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {!isShowFoundersAgreement && (
                    <>
                        <Typography variant="h2" color="primary" align="center" gutterBottom>
                            Free legal documents for startups
                        </Typography>
                        <Typography variant="h4" align="center" gutterBottom>
                            Choose a document to draft
                        </Typography>

                        <Documents onSelectDocument={() => setShowFoundersAgreement(true)} />
                    </>
                )}

                {isShowFoundersAgreement && <SafeAgreement onAnswerSelect={setQuestions} />}
            </Container>
        </>
    )
}

export default Layout
