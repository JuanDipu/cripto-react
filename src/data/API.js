import React, { Component } from "react";
import axios from "axios";
import "./API.css";

export default class API extends Component {
  state = {
    coins: [],
  };

  componentDidMount() {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 20,
          price_change_percentage: "24h",
        },
      })
      .then((res) => {
        const coins = res.data;
        this.setState({ coins });
      });
  }

  render() {
    return (
      <div className="coin">
        <div className="item">
          <h2>ICON</h2>
          <ul>
            {this.state.coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.image} alt="img"></img>
              </li>
            ))}
          </ul>
        </div>
        <div className="item">
          <h2>NAME</h2>
          <ul>
            {this.state.coins.map((coin) => (
              <li key={coin.id}>{coin.name}</li>
            ))}
          </ul>
        </div>
        <div className="item">
          <h2>SYMBOL</h2>
          <ul>
            {this.state.coins.map((coin) => (
              <li key={coin.id}>{coin.symbol}</li>
            ))}
          </ul>
        </div>
        <div className="item">
          <h2>PRICE(USD)</h2>
          <ul>
            {this.state.coins.map((coin) => (
              <li key={coin.id}>{coin.current_price}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
