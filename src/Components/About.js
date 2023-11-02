import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">DOMINAR</Typography>
              <Typography variant="body1">
                "Dominar"Dominar 400 is a touring beast. Get spoilt with a choice of accessories curated especially for a comfortable touring experience. Tall visor, hand guard, engine bash plate, USB charging port, leg guard, carrier + back stopper, navigation stay, and saddle stay."Dominar":
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">ROYAL ENFEILD</Typography>
              <Typography variant="body1">
                "RE"The All-New Classic 350 continues to embody the traditions and craftsmanship of the past as it is reborn. Inspired by the post war G2 model, first born in 1950’s, the all new Classic 350 continues to be a testament to the timeless design which took the motorcycling world with an awe back in the heydays of British motorcycling. The Classic teardrop fuel tank, the distinctive thump and the hallmark casquette headlamp - all harmonise as one, rejoicing in the masterpiece that is the timeless Royal Enfield Classic.."RE 35T":
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;