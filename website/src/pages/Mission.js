import React from 'react';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Mission = () => {
    return (
        <div style={{position: "relative", top: "100px"}}>
           <Typography fontFamily="Aeonik" fontSize={20} style={{textAlign: "center"}}>
                Our Mission
            </Typography>
            <Typography fontFamily="Aeonik" fontSize={40} style={{textAlign: "center"}}>
                We believe in a more sustainable and conscientious way of living.
            </Typography>
            <Typography fontFamily="Aeonik" fontSize={20} style={{marginLeft: "500px", marginRight: "500px", textAlign: "center"}}>
                We believe our team, our residents,
                and our partners must reflect the diversity of the communities we serve.
                We're contributing to build a future where everyone has the support
                they need to make time for the people and things that matter most.
            </Typography>
            <Card sx={{ maxWidth: 1475, maxHeight:595 }}>
                <CardMedia
                    component="img"
                    image="/image/mentalhealthimage.png"
                    alt="sun"
                />
            </Card>
        </div>
    );
};

export default Mission;