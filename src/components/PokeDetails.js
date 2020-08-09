import React from "react";

import { useState, useEffect } from "react";
import { Line, Circle } from 'rc-progress';

function PokeDetails({ match }) {
  useEffect(() => {
    const fetchDetail = async () => {
      console.log(match);
      const fetchDetail = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
      );
      const pokeinfo = await fetchDetail.json();

      let id =
        Array(Math.max(3 - String(match.params.id).length + 1, 0)).join(0) +
        match.params.id;
      let allmoves = pokeinfo.moves.slice(0, 5).map((mo) => mo.move.name);

      let allstat = pokeinfo.stats.map((m) => {
        let processed_obj = { name: m.stat.name, base_stat: m.base_stat };
        return processed_obj;
      });
      //   let allbasestats = pokeinfo.stats.map(m => m.base_stat);

      let alltypes = pokeinfo.types.map((t) => t.type.name);
      let image = `https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_${id}_00.png?raw=true`;
      let abl = pokeinfo.abilities.map((a) => a.ability.name);

      let SpeciesUrl = pokeinfo.species.url;
      let speciesData = await fetch(SpeciesUrl);
      speciesData = await speciesData.json();
      console.log({ speciesData });

      let alltext = speciesData.flavor_text_entries.filter(
        (ele) => ele.language.name === "en"
      )[0].flavor_text;
      //   console.log("kama", alltext);
      let onlygrowth = speciesData.growth_rate.name;
      //   console.log(onlygrowth);
      let onlyhabitat =
        speciesData.habitat != null && speciesData.habitat.length > 0
          ? speciesData.habitat.name
          : null;

      let TypeUrl =
        pokeinfo.types.length > 0 ? pokeinfo.types[0].type.url : null;
      let typeData = await fetch(TypeUrl);
      typeData = await typeData.json();
      console.log({ typeData });

      //   if (pokeinfo.types.length > 0) {
      //     for (let i = 0; i < 1; i++) {
      //       TypeUrl= pokeinfo.types[i].type.url;
      //     }
      //   }
      // let typeData= await TypeUrl.json();
      //       let TypeUrl= pokeinfo.types[];
      //  console.log("asd",TypeUrl);

      let allDoubleDamage = [];
      // typeData.damage_relations.map(da=>da.double_damage_from.name);
      for (
        let i = 0;
        i < typeData.damage_relations.double_damage_from.length;
        i++
      ) {
        allDoubleDamage.push(
          typeData.damage_relations.double_damage_from[i].name
        );
        // console.log(allDoubleDamage);
      }
      let allDoubleDamageTo = [];
      // typeData.damage_relations.map(da=>da.double_damage_from.name);
      for (
        let i = 0;
        i < typeData.damage_relations.double_damage_to.length;
        i++
      ) {
        allDoubleDamageTo.push(
          typeData.damage_relations.double_damage_to[i].name
        );
        // console.log(allDoubleDamageTo);
      }
      let allgeneration = speciesData.generation.name;

      setDetail({
        moves: allmoves,
        types: alltypes,
        image,
        weight: pokeinfo.weight,
        // stat: allbasestats,
        height: pokeinfo.height,
        stats: allstat,
        name: pokeinfo.name,
        abilities: abl,
        capture: speciesData.capture_rate,
        flavor_text: alltext,
        growth_rate: onlygrowth,
        habitat: onlyhabitat,
        double_damage_from: allDoubleDamage,
        double_damage_to: allDoubleDamageTo,
        generation: allgeneration,
      });

      console.log("finaldetail", pokeinfo);
    };

    fetchDetail();
    // console.log("deatils",match);
    // eslint-disable-next-line
  }, []);

  const [Detail, setDetail] = useState({
    moves: [],
    types: [],
    image: "",
    weight: null,
    height: null,
    stats: [],
    // stat: [],
    name: null,
    abilities: [],
    capture: null,
    flavor_text: [],
    growth_rate: null,
    // habitat: null,
    double_damage_from: [],
    double_damage_to: [],
    generation: null,
  });
  console.log("klfsldajdls", Detail);
  return (
    <div className="PokeContainerName">
      <div className="PokeHeading">
        <h1>{Detail.name}</h1>
      </div>

      <div className="PokeContainer1">
        <div className="Pokeimg">
          <img src={Detail.image} alt="failed" />
        </div>
        <div className="PokeText">
          <p>{Detail.flavor_text}</p>
        </div>
      </div>
      <div className="PokeContainer2">
        <div className="Pokesize">
          <div>
           
            <p>Weight: {Detail.weight} lbs</p>
            <p>Height: {Detail.height}"</p>
            <p>capture Rate: {Detail.capture}%</p>
            <p>habitat: {Detail.habitat}</p>
            <p>Growth-rate: {Detail.growth_rate}</p>
            <p>generation Type: {Detail.generation}</p>
            <p>
              abilities:
              {Detail.abilities.map((ability) => {
                return <span key={ability.toString()}>{ability}</span>;
              })}
            </p>
          </div>
        
        </div>
        <div className="Pokeway">
          Types
          {Detail.types.map((type) => {
            return <h4 key={type.toString()}>{type}</h4>;
          })}
          Weakness
          {Detail.double_damage_from.map((damage) => {
            return <p key={damage.toString()}>{damage}</p>;
          })}
          strong against
          {Detail.double_damage_to.map((strong) => {
            return <p key={strong.toString()}>{strong}</p>;
          })}
        </div>
      </div>
      <div className="PokeContainer3">
        STATES
        {Detail.stats.map((stat) => {
          // return <h4 key={stat.name}>{stat.name + "  " + stat.base_stat}</h4>;
        return <h5  key={stat.name}>{stat.name.toUpperCase()}  <span ><Line percent={stat.base_stat} strokeWidth="1" strokeColor="#60C6F6" trailColor="#fff"	 /></span></h5>;
        })}
      </div>
       </div>
  );
}

export default PokeDetails;
// eslint-disable-next-line
{
  /* <div  className="Pokemov">
<p >Current Moves:{Detail.moves.map((move,index) =>{
    return <p>{move}</p>
})}</p>
</div> */
}
// eslint-disable-next-line
{
  /* <p>
          States
          {Detail.stat.map((base_stat, index) => {
            return <h4>{base_stat}</h4>;
          })}
        </p> */
}
