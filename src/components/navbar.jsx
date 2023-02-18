import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container} from '@material-ui/core';
import { Movie } from '@material-ui/icons';

const Navbar = () => {
return(
<>
<CssBaseline/>
<AppBar position='relative'>
<Toolbar>
<Movie  fontSize='large'/>

<Typography variant='h2'>

Pixar Movies Collection
</Typography>
</Toolbar>
</AppBar>
<main>
<div>
<Container maxWidth='sm' style={{marginTop:'40px'}}>
<Typography variant='h3' align='center' gutterBottom  color='textPrimary' >
Pixar Movies!
</Typography>
<Typography variant='h5' align='center' paragraph color='textSecondary'>
Here you can find the list of all of the Pixar Movies.
This is surely going to make you feel nostalgic remembering watching all those amazing 
Pixar movies with life-like charachters.
</Typography>
</Container>






</div>













</main>















</>
);
}

export default Navbar;


