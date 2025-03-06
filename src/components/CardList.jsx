import "./CardList.css";
const CardList = ({ monsters }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}/set=set2&size=180x180`}
              alt={name}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
