import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core'
import SafeAgreementIcon from '../SafeAgreement/icon.png'
import FoundersAgreementIcon from '../FoundersAgreement/icon.jpg'
import TermsAgreementIcon from '../TermsAgreement/icon.png'
import './style.css'

const Documents = ({ onSelectDocument }) => {
    const documents = [
        {
            image: FoundersAgreementIcon,
            title: 'Founders agreement',
            description:
                "When you just decided to begin your startup journey it's always a good idea to lay out some ground rules with your co-founders. This service can help you with this. Click the button below and start drafting!",
            buttonTitle: 'Soon',
            buttonDisabled: true,
            onClick: () => console.log('Not enabled'),
        },
        {
            image: SafeAgreementIcon,
            title: 'Safe agreement',
            description:
                'Woooow! Congrats on your first investors! Lets get your SAFE ready in minutes, get some funding and get back to work. This are just the first steps. Round A awaits ahead. Click the button below and star drafting!',
            buttonTitle: 'Select',
            buttonDisabled: false,
            onClick: onSelectDocument,
        },
        {
            image: TermsAgreementIcon,
            title: 'Terms agreement',
            description:
                'If you are starting your SaaS company or building an app, you can count on this Service to create Terms of Service for you. You tailor it to the needs and processes of your business by answering simple questions. Just click a button below and start drafting!',
            buttonTitle: 'Soon',
            buttonDisabled: true,
            onClick: () => console.log('Not enabled'),
        },
    ]
    return (
        <div className="Documents">
            {documents.map(doc => (
                <Card key={doc.title}>
                    <CardActionArea onClick={doc.onClick}>
                        <img src={doc.image} alt={doc.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {doc.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {doc.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={doc.onClick}
                            disabled={doc.buttonDisabled}
                        >
                            {doc.buttonTitle}
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Documents
