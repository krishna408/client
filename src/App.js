import React,{useEffect,useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'

import {getPosts} from "./actions/posts"
import memories from "./images/memories.jpg";
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles';


const App=()=>{
    const classes=useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                    <Typography variant="h2" align="center">Memories</Typography>
                    <img src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spaceing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts></Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form></Form>
                        </Grid>
                            
                    </Grid>
                </Container>
            </Grow>    
        </Container>
        
    );
}
export default App;