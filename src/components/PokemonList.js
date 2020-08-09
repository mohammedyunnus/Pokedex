import React from "react";
import Layout from "./Layout";
import axios from "axios";
// import { FixedSizeList as List } from 'react-window';
import { Link } from "react-router-dom";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      type: "",
      pokemon: []
    };
  }

  padDigits(number, digits) {
    return (
      Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
    );
  }

  getPokeImg = async url => {
    let allPoke = null;
    allPoke = await axios.get("https://pokeapi.co/api/v2/pokemon?&limit=50");
    console.log(allPoke);
    let Finalres = [];
    for (let i = 0; i < allPoke.data.results.length; i++) {
      let url = allPoke.data.results[i].url;

      let data = await axios.get(url);
      let id = data.data.id;
      id = this.padDigits(id, 3);

      data.data.goodImg = `https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_${id}_00.png?raw=true`;
      Finalres.push(data.data);
    }
    console.log(Finalres);
    return Finalres;
  };

  componentDidMount() {
    this.getPokeImg("jdlk")
      .then(data => {
        console.log("fdasjdslf", data);
        let curren = {
          id: "",
          name: "",
          type: "",
          pokemon: data
        };
        this.setState(curren);
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log("pokr ptolidy ",this.props);
    return (
      <div>
        {this.state.pokemon ? (
          <div className="card-container">
            {this.state.pokemon.map((ele, index) => (
              <Link key={ele.id}
                to={`/Info/${index + 1}`}
                style={{ textDecorationLine: "none" }}
              >
                <Layout
                  glb2style={this.props.glbstyle}
                  key={index + 1}
                  imgsrc={ele.goodImg}
                  pokename={ele.name}
                  type={ele.types}
                  id={index + 1}
                />
              </Link>
            ))}
          </div>
        ) : (
          <h1>Loding</h1>
        )}
        {/* glblaystyle={this.props.glbstyle} */}
      </div>
    );
  }
}

export default PokemonList;
