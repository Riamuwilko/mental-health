import React from 'react';
import {CardContent, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Mission = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div style={{position: "relative", top: "100px", paddingBottom: "200px"}}>
           <Typography fontFamily="Aeonik" fontSize={20} style={{textAlign: "center"}}>
                Our Mission
            </Typography>
            <Typography fontFamily="Aeonik" fontSize={40} style={{textAlign: "center"}}>
                We are here for you.
            </Typography>
            <Typography fontFamily="Aeonik" fontSize={20} style={{textAlign: "center"}}>
                We understand that you are living through an unprecedented period of time.<br></br>
                There are a lot of unknowns in the world right now.<br></br>
                But we are here to help.
            </Typography>
            <br></br>
            <Grid
                container
                justify="center"
                alignItems="center"
                columnSpacing={10}
                rowSpacing={5}
                style={{minHeight: "20vh",
                        display: "flex",
                        justifyContent: "center"
                    }}
            >
                <Grid item xs={12} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 800, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/dilemna.png"
                            alt="sun"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} style={{display: "flex", justifyContent: "center" }}>
                    <Typography fontFamily="Aeonik" fontSize={30} style={{textAlign: "center", color: "#003153"}}>
                        Meet the team
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{display: "flex", justifyContent: "flex-end" }}>
                    <Card sx={{ width: 350, height: 400 }}>
                        <CardMedia
                            component="img"
                            image="/image/willprof.png"
                            alt="sun"
                            sx={{ width: 350, height: 300 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" fontSize={20} color= "#003153">
                                William Kong
                            </Typography>
                            <div style={{display: "flex", flexWrap: 'wrap'}}>
                                <LinkedInIcon onClick={() => openInNewTab("https://www.linkedin.com/in/william-kong-8094ab1b5/")}
                                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 50, color: "#0474b4"}} />
                                <GitHubIcon onClick={() => openInNewTab("https://github.com/Riamuwilko")}
                                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 50}} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} style={{display: "flex", justifyContent: "flex-start" }}>
                    <Card sx={{ width: 350, height: 400 }}>
                        <CardMedia
                            component="img"
                            image="/image/dlinprof.png"
                            alt="sun"
                            sx={{ width: 350, height: 300 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" fontSize={20} color= "#003153">
                                Darren Lin
                            </Typography>
                            <div style={{display: "flex", flexWrap: 'wrap'}}>
                                <LinkedInIcon onClick={() => openInNewTab("https://www.linkedin.com/in/darren-lin-430a121b0/")}
                                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 50, color: "#0474b4"}} />
                                <GitHubIcon onClick={() => openInNewTab("https://github.com/Deltafox137")}
                                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 50}} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Mission;