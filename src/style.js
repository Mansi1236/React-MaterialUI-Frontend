import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme)=> ({
cardGrid : {
padding: '20px 0'

},
card :{
height: '100%',
display: ' flex ',
flexDirection: 'column'

},

cardMedia : {
    paddingTop: '56.25%'


},

cardContent : {
flexGrow: '1'

}

}));

export default useStyles;