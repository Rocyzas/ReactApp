import { MouseEvent } from "react";
function ListGroup() {
  const items = ["Kaunas", "Vilnius", "Siauliai", "Klaipeda"];

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
