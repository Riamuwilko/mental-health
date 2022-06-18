import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import {useNavigate} from 'react-router-dom';


const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={{ background: '#fdae0c', top: 0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EnergySavingsLeafIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 30 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Mindful
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end'} }}>
            <Button
                onClick={() => navigate("/mission")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight: 700 }}
              >
                Mission
              </Button>
              <Button
                onClick={() => navigate("/learn")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight: 700 }}
              >
                Learn
              </Button>
              <Button
                onClick={() => navigate("/resources")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 20, fontWeight: 700 }}
              >
                Resources
              </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
