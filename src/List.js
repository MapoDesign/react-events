import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = (props) => {
  return (
    <div className="container d-flex justify-content-center flex-wrap">
      <ul className="user-list">
        {props.data.map((person) => (
          <li key={person.id}>
            <Person {...person} removeItem={props.removeItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Person = ({ id, nome, stato, img, removeItem }) => {
  return (
    <>
      <div className="card w-100 shadow m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="card-img-top" src={img} alt={nome} />
          </div>
          <div className="col-md-8">
            <div className="card-header d-flex justify-content-evenly align-items-center">
              <h3 className="mb-0">{nome}</h3>
              <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => removeItem(id)}
              >
                <RiDeleteBack2Fill className="icon" /> Delete
              </button>
            </div>
            <div className="card-body">
              <p>{stato}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
