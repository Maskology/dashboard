import { useEffect, useState } from "react";
import api from "../../api/server";

interface Category {
  tags: string;
  name: string;
  id: string;
}

interface CategoryData {
  meta: any;
  data: Category[];
}

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const [categoryList, setCategoryList] = useState<Category[]>([]);
  async function getCategory() {
    const result: CategoryData = await api("/categories?page=1&limit=6");
    setCategoryList(result.data);
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="mx-5 px-5">
      <h2 className="my-5">Add Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Store Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categorySelect" className="form-label">
            Mask Category
          </label>
          <select
            id="categorySelect"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue={""}>Selected Here</option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="formStock" className="form-label">
            Stock
          </label>
          <input type="number" className="form-control" id="formStock" />
        </div>
        <div className="mb-3">
          <label htmlFor="formPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            accept="jpg"
            className="form-control"
            id="formPrice"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Product Image
          </label>
          <input type="file" className="form-control" id="formFile" />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mb-5">Add Product</button>
        </div>
      </form>
    </div>
  );
}
