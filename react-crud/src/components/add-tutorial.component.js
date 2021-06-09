import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangevendor = this.onChangevendor.bind(this);
    this.onChangetypeproduct = this.onChangetypeproduct.bind(this);
    this.onChangemodel = this.onChangemodel.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);


    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      vendor: "",
      typeproduct: "",
      model: "",
      price: "",

      published: false,

      submitted: false
    };
  }

  onChangevendor(e) {
    this.setState({
      vendor: e.target.value
    });
  }
  onChangetypeproduct(e) {
    this.setState({
      typeproduct: e.target.value
    });
  }
  onChangemodel(e) {
    this.setState({
      model: e.target.value
    });
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value
    });
  }


  saveTutorial() {
    var data = {
      vendor: this.state.vendor,
      typeproduct: this.state.typeproduct,
      model: this.state.model,
      price: this.state.price

    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          vendor: response.data.vendor,
          typeproduct: response.data.typeproduct,
          model: response.data.model,
          price: response.data.price,

         published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      vendor: "",
      typeproduct: "",
      model: "",
      price: "",

      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">vendor</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.vendor}
                onChange={this.onChangevendor}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">typeproduct</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.typeproduct}
                onChange={this.onChangetypeproduct}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">model</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.model}
                onChange={this.onChangemodel}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">price</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.price}
                onChange={this.onChangeprice}
                name="title"
              />
            </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
