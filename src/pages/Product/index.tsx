import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/server";

interface ProductData {
  id: string;
  name: string;
  stock: number;
  price: number;
}

export default function Product() {
  const thead = ["#", "Name", "Stock", "Price", "Action"];
  const [data, setData] = useState<ProductData[]>([]);

  async function getData() {
    const result: ProductData[] = await api(
      `/stores/${localStorage.getItem("id")}/product`
    );
    setData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteData(id: string) {
    await api(`/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")!}`,
      },
    });
    alert("Data deleted");
    await getData();
  }

  return (
    <div className="mx-5 px-5">
      <div className="d-flex">
        <h2 className="my-5">Product List</h2>
        <Link to="/add-product">
          <button className="btn btn-sm btn-primary my-5 ms-3 fw-bold">
            Add Product
          </button>
        </Link>
      </div>
      <table className="table border">
        <thead>
          <tr>
            {thead.map((data, index) => (
              <th scope="col" key={index}>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.id}>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.stock}</td>
              <td>{data.price}</td>
              <td>
                <Link
                  className="text-decoration-none text-primary"
                  to={`/edit-product/${data.id}`}
                >
                  Edit
                </Link>{" "}
                |{" "}
                <span
                  role="button"
                  className="text-danger"
                  onClick={() => deleteData(data.id)}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
