import React from "react";
// import FlipCard from "react-flipcard-2";
// eslint-disable-next-line
import axios from "axios";

// import PokeDetails from "./PokeDetails"
class Layout extends React.Component {
  constructor() {
    super();
    this.state = {};
    //    this.handleChange=this.handleChange.bind(this);
  }

  //    handleChange(){
  //        console.log("Hell nash chuth");
  // //    return(<PokeDetails />);

  //    }

  render() {
    let types = [];
    let tyecolor = {
      poison: "#B97FC9",
      water: "#4692C4",
      fire: "#FD7D25",
      normal: "#A4ACAF",
      grass: "#9BCC51",
      flying: "#C0C0C0",
      ground: "#AB9843",
      psychic: "#F367B9",
      bug: "#729F3F",
      rock: "#A38C22",
      electric: "#EED535",
      fighting: "#D56824",
      fairy: "#FDB9E9",
      ice: "#52C4E7",
      ghost: "#7B63A3",
      dragon: "#4924A1",
      steel: "#9EB7B8",
      dark: "#707070"
    };
    this.props.type.forEach(element => {
      types.push(element.type.name);
    });

    types = [];
    types.push(this.props.type[0].type.name);

    function first(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
      <div key={this.props.id} className="Card">
        {/* style={{backgroundColor:this.props.glblaystyle.backgroundColor}} */}
        <div className="img-container">
          {" "}
          {/* <a href="../PokeDetails"> */}
          <img key={this.props.id} src={this.props.imgsrc} alt="failed " />
        </div>
        <p className="p_id">{this.props.id}</p>
        <p className="p_name">{first(this.props.pokename)}</p>

        <div>
          {types.map((value) => {
            return (
              <p
                className="p_type"
                key={value.toString()}
                style={{ backgroundColor: tyecolor[value] }}
              >
                {first(value)}
              </p>
            );
          })}
        </div>
        {/* </a> */}
      </div>
    );
  }
}

export default Layout;
