import React from 'react';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Resources = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div style={{position: "relative", top: "100px", paddingBottom: "200px"}}>
            <Typography fontFamily="Aeonik" fontSize={40} style={{textAlign: "center", paddingBottom: "50px" }}>
                Where to get help
            </Typography>
            <Typography fontFamily="Aeonik" fontSize={20} style={{textAlign: "center", paddingBottom: "50px" }}>
                The free and confidential resources below can help you or a loved one connect with a skilled, trained mental health professional. Remember You Are Not Alone!
            </Typography>
            <div
                style={{
                    paddingBottom: "50px",
                    display: "flex",
                    justifyContent: "center",

                }}
            >
                <List   component="nav"
                        aria-label="Resources"
                        sx={{
                            width: "75%",
                           bgcolor: '#68a9b0',
                    }}
                >
                    <ListItem button onClick={() => openInNewTab("https://www.nimh.nih.gov/health/find-help")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Check out the National Insitute of Mental Health Website"/>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => openInNewTab("https://suicidepreventionlifeline.org/?utm_source=google&utm_medium=web&utm_campaign=onebox")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Suicide Prevent Line" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => openInNewTab("https://www.crisistextline.org/")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Text the Crisis Line" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => openInNewTab("https://www.zocdoc.com/primary-care-doctors/new-york-46063pm")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Talk to Your Primary Doctor Online" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => openInNewTab("https://www.thecalmzone.net/donate")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Donate to Mental Health Organizations" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => openInNewTab("https://www.youtube.com/c/depressiontoexpression")} style={{textAlign: "center"}}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Aeonik", color: "#ffd700"}} primary="Recommended Meditation Youtube Channel" />
                    </ListItem>
                </List>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card elevation={0} sx={{width: 1420, height:500 }}>
                    <CardMedia
                        component="img"
                        image="/image/nice.gif"
                        alt="sun"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Resources;