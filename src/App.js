import React from "react";
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '...........',
      number: '****************',
      month: 'xx',
      day: 'xx',

    }
  }

  //Name of Card Owner
  nameChange(n) {
    let nom = /^[a-zA-Z \s]{1,20}$/g;
    let a = n.target.value;
    nom.test(a) ? this.setState({ name: a.toUpperCase() }) : alert("utliser que des lettres")
  }
  //Card Number
  numberChange(e) {



    this.setState({ number: "****************" });
    let a = e.target.value;
    if (a.length > 0) {
      let n = /(\d){1,15}$/g
      n.test(a) ? this.setState({ number: a.replace(/(\d{4})/g, '$1   ').padEnd(16, '*') }) : alert("utliser que des chifre")

    }

  }
  monthChange(m) {



    this.setState({ month: "xx" });
    let a = m.target.value;
    if (a >= 1 && a <= 12) {
      let n = /(\d){1,15}$/g
      n.test(a) ? this.setState({ month: a.replace(/(\d{4})/g, '$1   ') }) : alert("utliser que des chifre")

    }

  }

  //Expiration
  /*monthChange(m) {

    this.setState({
      month: m.target.value
    });
  }
  dayChange(d) {
    this.setState({
      day: d.target.value
    });
  }*/
  dayChange(d) {
    this.setState({ day: "xx" });
    let a = d.target.value;
    if (a >= 20 && a <= 35) {
      let n = /(\d){1,15}$/g
      n.test(a) ? this.setState({ day: a.replace(/(\d{4})/g, '$1   ') }) : alert("utliser que des chifre")

    }

  }


  render() {

    return <div>

      <div className="small-6 columns">
        <h1 className="credit__bank">Gdida bank</h1>
      </div>
      <div className="card">
        <div className="small-5  ">
          <div className="c credit">
            <div className="row">

              <div className=" columns">
                <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
              </div>
            </div>
            <div className="row">
              <div>
                <h1 className="credit__bank">master-card</h1>
              </div>
              <div className="column">

                <p className="credit__card-number">{this.state.number}</p>
              </div>

              <div className="small-3 columns">
                <label>Expires
            <p className="credit__date">{this.state.month} / {this.state.day}</p>
                </label>
              </div>
              <div className="small-9 columns">
                <label>Card Owner
            <p className="credit__name">{this.state.name}</p>
                </label>
              </div>
            </div>

          </div>
        </div>

        <div className="callout margin">
          <label><h3>NAME</h3>
            <input type="text" onChange={this.nameChange.bind(this)} />
          </label>
          <label><h3>NUMBER</h3>
            <input type="text" maxLength="16" onChange={this.numberChange.bind(this)} />
          </label>
          <div className="row">
            <label className="column"></label>
            <div className="small-4 columns"><h3>month</h3>
              <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
            </div>
            <div className="small-4 columns end"><h3>year</h3>
              <input type="text" maxLength="2" onChange={this.dayChange.bind(this)} />
            </div>
          </div>

        </div>
      </div>
    </div>

  }
}




export default App;
