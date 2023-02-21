## React and Material UI frontend 
### The project is deployed on Netlify. It is a simple frontend application where you can find all of the list of Pixar movies and watch their trailers released till February 2023
## Link of the application hosted on Netlify  \-> [React-MaterialUI-Frontend](https://glowing-bunny-a003b0.netlify.app/)


## * About the Project and tech stacks used *

### Using components from Material UI core library like Typography, AppBar, CssBaseline, Toolbar, Container,Grid, Card, CardActions, CardMedia, Button etc.
#### import { Typography, AppBar, CssBaseline, Toolbar, Container} from '@material-ui/core';

### Also, I have used icons from Material UI icons library to import ready-made icons in the react projects
### import { Movie } from '@material-ui/icons';

### For styling the components I have used makeStyles function from Material UI to create css classes using JS objects.
### import {makeStyles} from '@material-ui/icons';

### const useStyles = makeStyles((theme) => {()}); ->  This returns a hook names useStyles that is equal to the makeStyles function returning a JavaScript Object
### By declaring - const classes = useStyles(); -> the classes keyword can be used to create CSS className such that the Material UI CSS styling can be applied to components
