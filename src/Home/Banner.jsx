import React, { useState } from "react";
import ProductsData from "../products.json"
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import SelectedCategory from "../Components/SelectedCategory";

const title = <h2>Search Your One from <span>Thousands</span> of Products</h2>;
const desc = "we Have the Largest Collection of the products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(ProductsData);
    // console.log(ProductsData)
    // search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // filter based on search
        const filtered = ProductsData.filter((products) => products.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    }

  return <div className="banner-section style-4">
    <div className="container">
        <div className="banner-content">
            {title}
            <form>
                <SelectedCategory select={"all"}/>
                <input type="text" name="search" id="search" placeholder="Search Your product" value={searchInput} onChange={handleSearch} />
                <button type="submit">
                <i className="icofont-search"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
                {
                    searchInput && filteredProducts.map((product, i )=> <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    </div>
  </div>;
};

export default Banner;
