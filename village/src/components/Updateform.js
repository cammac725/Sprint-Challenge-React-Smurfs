import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let id;
    let obj = this.props.smurfs.filter(obj => obj.name === this.state.name)[0];
    if (obj === undefined) {
      id = 0;
    } else {
      id = obj.id
    }
    this.props.updateSmurf(this.state, id)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div className="Smurf-form">
        <h3>Update this Smurf's info</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='form-button' type="submit">Update Me</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm;