import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'dark',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'RX 100',
      description: 'RX',
      image: 'https://tse1.mm.bing.net/th?id=OIP.wTAI-ZpRoPJOTQxCTila3gHaEV&pid=Api&P=0&h=180',
    },
    {
      title: 'classic 350',
      description: 'Best ever',
      image: 'https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/landing/desktop/royal-enfield-classic-350.jpg',
    },
    {
      title: 'Dominar 400',
      description: 'Best ever',
      image: 'https://i0.wp.com/www.iamabiker.com/wp-content/uploads/2017/01/Dominar-400-HD-wallpaper-1.jpg',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://bestwallpapers.net/wp-content/uploads/2020/01/Most-Popular-Super-Sport-Bikes-HD-Wallpapers-Free-Download-31.jpeg',
    'https://uploads.carandbike.com/used-bikes/84371/large/royal-enfield-classic-350-front-view.jpg?v=1608470725',
    'https://www.xbhp.com/wp-content/uploads/2021/09/New-Royal-Enfield-Classic-350-14.jpg',
    'https://i.pinimg.com/originals/7f/89/f6/7f89f6c1bd535b70a5a0adab021ca6f6.jpg',
  ];

  const animeWallpapers = [
    'https://images.unsplash.com/photo-1559565819-3029a0e938e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://merogaadi.s3.us-east-2.amazonaws.com/images/makes/Royal%20Enfield%20Himalayan%20Side%20View-1589533446-310.jpg',
    'https://i1.wp.com/www.iamabiker.com/wp-content/uploads/2020/01/2020-BS6-Royal-Enfield-Himalayan-15.jpg?fit=1920%2C1156&ssl=1',
    'https://compare.pricesofindia.com/src/news/2019/11/16/Royal-Enfield-Classic-350-Modified-Prices-Of-India.jpg',
    'https://www.iamabiker.com/wp-content/uploads/2020/01/BS6-Royal-Enfield-Classic-350-08.jpg',
  ];
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              NS HD WALLPAPERS
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              NS Themes
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  related suggestion images
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
         Wallpapers
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Wallpaper {index + 1}
                    </Typography>
                    <Typography variant="body2">Classy wallpaper.</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;