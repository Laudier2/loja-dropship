import React from 'react'
import Nav from './components/nav/navBar';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer';
import Consume from './components/chec/chec';
import Desc2 from './components/descricao/descricao-produto'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

  desenv: {
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
}))

function App() {

  const classes = useStyles();

  return (
    <div className="page-container">
      <div className="conatiner-wrap"> 
        <Nav />
        <Switch>
          <Route exact path='/' component={Consume}/>
          <Route exact path='/desc' component={Desc2} />          
        </Switch>
        <Footer />
        <div className={classes.desenv}>
          <p>
            &copy;{new Date().getFullYear} Desenvolvedor: José Santana de Jesus
            <small className={classes.desenv}> 
            <br />          
            trabalhandooline2019@hotmail.com
          </small>
          <small className={classes.desenv}>
            (75) 998239680
          </small>
          </p>
         
        </div>
      </div> 
    </div>
  );
}

export default App;
