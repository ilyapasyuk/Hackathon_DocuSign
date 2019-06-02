import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Container, AppBar, Typography, Toolbar } from '@material-ui/core'
import SafeAgreement from '../SafeAgreement'
import Documents from '../Documents'
import './style.css'

const Layout = ({}) => {
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

                {isShowFoundersAgreement && <SafeAgreement />}
            </Container>
        </>
    )
}

export default hot(Layout)
