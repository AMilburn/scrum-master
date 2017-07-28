import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions/index';
import { bindActionCreators } from 'redux';
import establishConnection from '../helpers/helpers';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleScrumChange = this.handleScrumChange.bind(this);
    this.state = {
      name: '',
      roomCode: '',
      isScrumMaster: false,
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleRoomChange(event) {
    this.setState({
      roomCode: event.target.value,
    });
  }

  handleScrumChange(event) {
    this.setState({
      isScrumMaster: event.target.checked,
    });
  }

  render() {
    return (
      <div className="login">
        <div className="login_container">
          <img className="login_image" src="../images/ajeeligator.png" />
        </div>
        <form className="login_form" onSubmit={this.props.joinRoom}>
          <input
            value={this.state.name}
            className="ajeel_input"
            placeholder="Your name" 
            abel="Name"
            onChange={this.handleNameChange}
          />
          <input
            value={this.state.roomCode}
            className="ajeel_input"
            placeholder="Enter room code"
            label="Room code"
            onChange={this.handleRoomChange}
          />
          <div className="login_buttonContainer">
            <div>
              Scrum Master: <input type="checkbox" label="Scrum Master" onChange={this.handleScrumChange} value={this.state.isScrumMaster}/>
            </div>
            <button
              className="ajeel_button"
              onClick={(e) => {
                e.preventDefault();
                establishConnection(this.state.name, this.state.roomCode, this.state.isScrumMaster);
                this.props.goToMenu();
              }}
            >
              JOIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   };
// }

function mapDispathToProps(dispatch) {
  return bindActionCreators({ joinRoom: joinRoom }, dispatch)
}

export default connect(null, mapDispathToProps)(Login);
