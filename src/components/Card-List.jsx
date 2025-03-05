import { Component } from "react";
import "./Card-List.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(monsters);

    return (
      <>
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <div className="card-container">
              <img
                src={`https://robohash.org/${id}/set=set2&size=180x180`}
                alt={name}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default CardList;
