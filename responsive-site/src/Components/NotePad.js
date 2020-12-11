import React, { Component } from "react";
import axios from "axios";

class NotePad extends Component {
  constructor() {
    super();

    this.state = {
      notebook: [],
      input: "",
    };
  }

  componentDidMount() {
    axios.get("/api/noteBook").then((res) => {
      this.setState({ notebook: res.data });
      console.log(res.data);
    });
  }

  addItem(noteId, text) {
    axios.post("/api/noteBook", { text: this.state.input }).then((res) => {
      this.setState({
        notebook: res.data,
        input: "",
      });
    });
  }

  deleteItem(noteId, text) {
    axios.delete(`/api/noteBook/${noteId}`).then((res) => {
      this.setState({ notebook: res.data });
    });
  }

  editItem(noteId, action) {
    const { input } = this.state;
    axios.put(`/api/noteBook/${noteId}`, { input }).then(res => {
        this.setState({
            notebook:res.data,
            input: ''
        })
    });
  }

  handleChange(val) {
    this.setState({ input: val });
  }

  render() {
    const mappedNotebook = this.state.notebook.map((element) => {
      return (
        <div>
          {element.text}
          <a className="btn-note" onClick={() => this.deleteItem(element.id)}>delete</a>
          <a className="btn-note" onClick={() => this.editItem(element.id)}>edit</a>
        </div>
      );
    });
    return (
      <div className="post-it notes">
        <h4>Notes:</h4>
        <p>{mappedNotebook}</p>
        <h4></h4>
        <input type="text" className="input-line" value={this.state.input} onChange={(e) => this.handleChange(e.target.value)} ></input>
        <a className="btn-note"href="#" value="5" onClick={() => this.addItem()}>ADD NOTE</a>
      </div>
    );
  }
}

export default NotePad;
