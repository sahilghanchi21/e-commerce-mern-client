import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices/Prices";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import { useCart } from "../../context/Cart";
import sliderClick from "react-card-slider-component";
import ReactCardSlider from "react-card-slider-component";
import "./homePage.css";
import c1 from "../../images/e1.png";
import c2 from "../../images/e2.png";
import c3 from "../../images/e3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import banner from "../../assets/images/blue-banner.jpg";
// import banner from "../../assets/images/banner.jpg";
import banner from "../../assets/images/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [radio, setRadio] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // State for toggling filters div
  console.log(showFilters, "clicked");
  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      {/* <img
        src={banner}
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      /> */}
      <div className="banner-div"></div>
      {/* banner image */}
      <div className="row mt-3 home-page">
        {/* <div className="container-fluid"> */}
          <button
            className="filter-button "
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </button>
        {/* </div> */}
      {showFilters && (
        <div className="filter768">
          <div className="col-md-3 ">
            <h4 className="text-center">Filter By Category</h4>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            {/* price filter */}
            <h4 className="text-center mt-4">Filter By Price</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
                >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="col-md-3 filters">
        <h4 className="text-center">Filter By Category</h4>
        <div className="d-flex flex-column">
          {categories?.map((c) => (
            <Checkbox
            key={c._id}
            onChange={(e) => handleFilter(e.target.checked, c._id)}
            >
              {c.name}
            </Checkbox>
          ))}
        </div>
        {/* price filter */}
        <h4 className="text-center mt-4">Filter By Price</h4>
        <div className="d-flex flex-column">
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
        <div className="d-flex flex-column">
          <button
            className="btn btn-danger"
            onClick={() => window.location.reload()}
          >
            RESET FILTERS
          </button>
        </div>
      </div>

      <div className="col-md-9 ">
        {/* <h1 className="text-center">All Products</h1> */}
        <div className="card-container  ">
          {products?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 20)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                    >
                    More Details
                  </button>
                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn loadmore"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
              >
              {loading ? (
                "Loading ..."
                ) : (
                  <>
                  {" "}
                  Loadmore <AiOutlineReload />
                </>
              )}
            </button>
          )}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Home;
