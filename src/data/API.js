import React, { Component } from "react";
import axios from "axios";
import "./API.css";
const titles = ["Coin", "Price", "Price Change", "24 volume"];
export default class API extends Component {
  state = {
    coins: [],
  };
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
  //"https://api.coingecko.com/api/v3/coins/markets"

  componentDidMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 20,
            price_change_percentage: "24h",
          },
        }
      )
      .then((res) => {
        const coins = res.data;
        this.setState({ coins });
        console.log(coins);
      });
  }

  render() {
    return (
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title) => (
              <td>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.coins.map((coin) => (
            <tr key={coin.name}>
              {/* <td>
                <img src={coin.image} alt="img"></img>
              </td> */}

              <td>
                <img src={coin.image} alt={coin.name}></img>
                <span>{coin.name}</span>
              </td>

              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
