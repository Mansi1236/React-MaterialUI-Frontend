import React from 'react';
import { Typography, CardContent, Container,Grid, Card, CardActions, CardMedia, Button } from '@material-ui/core';
import useStyles from '../style.js';

const MovieCard = (props) => {
const classes = useStyles();   
return(
<>
<main>
<Container  className={classes.cardGrid} maxWidth='md'>
<Grid container spacing={4}>
<Grid item>

<Card  className={classes.card}> 
<CardMedia 
className={classes.cardMedia}
image = {props.image}
tttle='image title'


/>
<CardContent className={classes.cardContent}>

<Typography variant='h3' >
{props.name}
</Typography>


<Typography variant='h4' paragraph>

{props.desc}


</Typography>

</CardContent>
<CardActions>

<Button size='sm' color='primary' variant='colored' >View</Button>
<Button size='sm' color='primary' variant='outlined' href={props.trailer}>Watch Trailer</Button>


</CardActions>

</Card>

</Grid>

</Grid>

</Container>
      
</main>

</>

);

} 
export default MovieCard;