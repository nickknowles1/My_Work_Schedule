import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = function () {

  axios.get('/stuff')
    .then((data) => {
      console.log(data.data)
    })
    .catch((err) => {
      console.error(err);
    })


  return (
    <div className="landing-page-main-div">
      <Router>
        <Grid className="grid"
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Hello World</h1>
        </Grid>
      </Router>
    </div>
  )
}

export default App;