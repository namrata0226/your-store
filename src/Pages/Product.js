import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/Slice";
import axios from "axios";
import './product.css'
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Spinner,
} from "reactstrap";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const increment = (id) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decrement = (id) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setData(products);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (id) => {
    dispatch(add(id))
  };

  const deleteHandler = (id) => {
    const newdata = data.filter((product) => product.id !== id);
    setData(newdata);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
      className="products"
    >
      {loading ? (
        <div
          className="d-flex"
          style={{ position: "absolute", left: "50%", top: "50%" }}
        >
          <Spinner className="me-2"></Spinner>
          <h5>Loading....</h5>
        </div>
      ) : (
        data.map((product, i) => {
          const { id, thumbnail, title, price, discountPercentage, quantity } = product;
          return (
            <div
              key={i}
              className="me-3 mt-4"
            >
              <div
                className="mt-3"
              >
                <Card className="card">
                  <div className="card-image">
                    <img
                      alt="Card"
                      src={thumbnail}
                    />
                  </div>
                  <CardBody className="card-body">
                    <CardTitle tag="h6">{title}</CardTitle>
                    <h6>Price: ${price}</h6>
                    <CardText>Discount: {discountPercentage} %</CardText>

                    <div style={{ cursor: "pointer" }}>
                      Quantity
                      <span
                        onClick={() => decrement(id)}
                        style={{ marginLeft: "0.8em", fontSize: "1.2em" }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span
                        style={{
                          border: "1px solid black",
                          padding: "1px 15px",
                          marginLeft: "0.5em",
                          marginRight: "0.5em",
                        }}
                      >
                        {quantity}
                      </span>
                      <span
                        onClick={() => increment(id)}
                        style={{ fontSize: "1.2em" }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </CardBody>
                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      color="success"
                      className="card-button"
                      onClick={() => handleAdd(id)}
                    >
                      Add to Cart
                    </Button>
                    <span
                      className="text-danger me-4"
                      onClick={() => deleteHandler(id)}
                    >
                      <BsTrash />
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Product;
