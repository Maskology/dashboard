import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const thead = ["#", "Name", "Stock", "Price", "Action"];
  const [data, setData] = useState([
    {
      name: "Topeng Barong",
      stock: 10,
      price: 1000000,
    },
    {
      name: "Topeng Barong",
      stock: 10,
      price: 1000000,
    },
    {
      name: "Topeng Barong",
      stock: 10,
      price: 1000000,
    },
    {
      name: "Topeng Barong",
      stock: 10,
      price: 1000000,
    },
    {
      name: "Topeng Barong",
      stock: 10,
      price: 1000000,
    },
  ]);

  return (
    <div className="mx-5 px-5">
      <div className="d-flex">
        <h2 className="my-5">Product List</h2>
        <Link to="/add-product">
          <button className="btn btn-sm btn-primary my-5 ms-3 fw-bold">
            Tambah
          </button>
        </Link>
      </div>
      <table className="table border">
        <thead>
          <tr>
            {thead.map((data) => (
              <th scope="col">{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.stock}</td>
              <td>{data.price}</td>
              <td>
                <Link to={`/edit-product/${index}`}>Edit</Link> | Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
