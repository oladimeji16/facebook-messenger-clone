import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core';

import './Message.css'

function Message({ message, userName }) {
    return (

        <Card>
            <CardContent>
                <Typography
                    color='white'
                    variant='h5'
                    component='h2'>
                    {userName}: {message}
                </Typography>
            </CardContent>
        </Card>


    )
}

export default Message
