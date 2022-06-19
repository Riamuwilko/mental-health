import React from 'react';
import {CardContent, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

const Learn = () => {
    return (
        <div style={{position: "relative", top: "100px", paddingBottom: "200px", marginLeft: "10%", marginRight: "10%"}}>
             <Typography fontFamily="Aeonik" fontSize={40} style={{textAlign: "center"}}>
                Importance of Learning
            </Typography>
            <br></br>
            <Typography fontFamily="Aeonik" fontSize={20} style={{textAlign: "center", paddingBottom: "100px"}}>
            Mental health is a huge issue everywhere. It impacts every aspect of our lives.<br></br>
            Taking care of ourselves is building relationship, enhancing our self-image,<br></br>
            reducing our anxiety and many more. Even if we personally aren't going through tough times,<br></br>
            we can make sure that people around us are okay. According to WHO,<br></br>
            approximately 280 million people in the world have depression
            </Typography>
            <Grid
                container
                justify="center"
                alignItems="center"
                rowSpacing={5}
                style={{minHeight: "20vh",
                        display: "flex",
                        justifyContent: "center"
                    }}
            >
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/anxiety.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Anxiety Disorders
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/bipolar.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Bipolar Disorders
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Associated with episodes of mood swings ranging from depressive lows to manic highs.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/depression.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Depression
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/disso.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Dissociation and Dissociative Disorders
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Involve experiencing lack of continuity between thoughts, memories, actions and identity
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/eat.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Eating Disorders
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Eating disorders<br></br>
                                Characterized by abnormal or disturbed eating habits (such as anorexia nervosa).
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/ocd.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Obsessive Compulsive Disorders
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Characterized by unreasonable thoughts and fears (obsessions) that lead to compulsive behaviors.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/omen.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Paranoia
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                An unrealistic distrust of others or a feeling of being persecuted.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{display: "flex", justifyContent: "center" }}>
                    <Card elevation={0} sx={{width: 300, height:400 }}>
                        <CardMedia
                            component="img"
                            image="/image/schiz.png"
                            alt="sun"
                            sx={{ width: 300, height: 250 }}
                        />
                        <CardContent>
                            <Typography fontFamily="Aeonik" color="#003153" fontSize={18}>
                                Schizophrenia
                            </Typography>
                            <Typography fontFamily="Aeonik" fontSize={16} >
                                Characterized by thoughts or experiences that seem out of touch with reality
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Learn;