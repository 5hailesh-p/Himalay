import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Grid } from '@mui/material';
const Services = () => {
    return (
        <>
        <Box container sx={{textAlign:'center',marginBottom:'4rem'}}  >
            <Typography variant='h2'>Our Services</Typography>
            <Typography variant='h6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eum sunt dolorem autem eius facere.</Typography>
        </Box>
            <Grid container  sx={{margin:"auto"}} maxWidth="lg" spacing={2}>

                
                <Grid  size={{xs:12,md:4}} >
                    <Card  >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
            </Grid>
        </>
    )
}

export default Services