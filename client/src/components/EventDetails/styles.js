import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    position:'relative',
    borderRadius: '20px',
    objectFit: 'cover',
    maxWidth: '100%',
    maxHeight: '300px',

  },
  paper:{
    position: 'relative',
    margin:'2em 5em',
    height: '100%', 
    // width:'100%',
    '@media (max-width:530px)' : {
margin:'20px 2em ',

    },
    // for galaxy fold mobiles. the extra small ones.
    '@media (max-width:300px)' : {
      margin:'20px 1em ',
      
          }
  },
 
  card: {
    // margin:'70px',
    position:'relative',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    
  },
  imageSection: {
    position:'relative',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },

  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '15px',
    height: '39vh',
  },
  eventmsg: {
    whiteSpace: "pre-wrap",
    maxWidth:'100%'
    
  },
  // desc_div:{
  //   whiteSpace: "pre-line",
  //   maxWidth:'100%'
 
  // }

}));