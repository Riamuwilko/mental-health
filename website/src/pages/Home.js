import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{minHeight: "95vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                        }}
            >
                <Grid 
                    container 
                    direction="column"
                    alignItems="center"
                    style={{
                        maxWidth: 1475
                    }}
                >
                    <Card sx={{ maxWidth: 1475, maxHeight:595 }}>
                        <CardMedia
                        component="img"
                        image="/image/mentalhealthimage.png"
                        alt="sun"
                        />
                    </Card>
                    <br></br>
                    <Card elevation={0}>
                        <CardContent style={{background: "#e1d4b7" }}>
                            <Typography fontFamily="Brush Script MT, Brush Script Std, cursive" fontSize={36} style={{textAlign: "center"}}>
                                "I hope you realize that every day
                                is a fresh start for you. That every
                                sunrise is a new chapter in your
                                life waiting to be written." -Juansen Dizon
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button onClick={() => navigate("/learn")} variant="contained" size="large" style={{ background: "#68a9b0", maxWidth: 300}}>
                        your journey starts here
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;