import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Grid } from '@mui/material';
const Services = () => {
    const ourServices = [
        {
            title: "webdesign",
            imgPath: 'https://picsum.photos/450/160',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit natus soluta, ab voluptatem ea!',
        },
        {
            title: "appdesign",
            imgPath: 'https://picsum.photos/450/160',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit natus soluta, ab voluptatem ea!',
        },
        {
            title: "destopapp",
            imgPath: 'https://picsum.photos/450/160',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit natus soluta, ab voluptatem ea!',
        },
        {
            title: "destopapp",
            imgPath: 'https://picsum.photos/450/160',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit natus soluta, ab voluptatem ea!',
        },
    ]
    return (
        <>
            <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}  >
                <Typography variant='h2'>Our Services</Typography>
                <Typography variant='h6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eum sunt dolorem autem eius facere.</Typography>
            </Box>
            <Grid container sx={{ margin: "auto" }} maxWidth="lg" spacing={2}>
                {ourServices.map((items, index) => {
                   return <ServicesCard key={index} items={items} />

                })}

            </Grid>
        </>
    )
}



export const ServicesCard = ({items}) => {
    return (

        <Grid size={{ xs: 12, md: 4 }} >
            <Card  >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={items.imgPath}
                        alt={items.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {items.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {items.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}


export default Services