import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FirstPage from './Component/FirstPage'
import NextPage from './Component/NextPage'
import NextPage2 from './Component/NextPage2'
import Summary from './Component/Summary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export class App extends Component {
  
  // we are using state to store the values
  state = {
    name: "",
    player: " ",
    colors:[],
  }

  // whenever there is change in the input field it catches
  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  // on submitting the value stores in the localstorage
  handleNameSubmit = (e) => {
    e.preventDefault(e)
    this.setState({ name: e.target.value })
    localStorage.setItem("name", this.state.name) 
  }

  // stores the checkbox info
  getSelected = (e) => {
    e.preventDefault(e)
    let selected = [];
    let noofchecks = document.getElementById("checksboxes");
    let chks = noofchecks.getElementsByTagName("INPUT")

    // we loop through inputs and stores the info in selected
    for (var i = 0; i < chks.length; i++) {
      if (chks[i].checked) {
        selected.push(chks[i].value);
      }
    }
    this.setState({colors:this.state.colors.push(selected)})
    localStorage.setItem("colors", this.state.colors) 
  }

 handleChangePlayer = (e) =>{
  this.setState({ player: e.target.value })
  }

  handlePalyerSubmit = (e) =>{
    e.preventDefault(e)
    this.setState({ player: e.target.value })
    localStorage.setItem("playername", this.state.player) 
  }

  render() {
    return (
      <div>
        <Router> 
          <Switch>
            <Route exact path="/" render={(props) => <FirstPage {...props} hName={this.handleChangeName} hNameSubmit={this.handleNameSubmit} />} />
            <Route path="/page1" render={(props) => <NextPage {...props} hPlayer={this.handleChangePlayer} hPlayerSubmit={this.handlePalyerSubmit} />} />
            <Route path="/page2" render={(props) => <NextPage2 {...props} getall={this.getSelected} />} />
            <Route path="/page3" component={Summary} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
