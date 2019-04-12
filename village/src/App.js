import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import UpdateForm from './components/Updateform';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }

  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }

  updateSmurf = (id, smurf) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/smurfs');
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route
          path='/smurf-form'
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        <Route
          path='/update-form'
          render={props =>
            <UpdateForm
              {...props}
              updateSmurf={this.updateSmurf}
            />
          }
        />
        <Route
          exact
          path='/'
          render={props =>
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf} />}
        />

      </div>
    );
  }
}

export default App;
