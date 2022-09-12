import "../index.css";
import Anvesh from "../book";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../cart";

//Calling data from local storage 
const BookLists = () => {
    const details = localStorage.getItem("product")
        ? JSON.parse(localStorage.getItem("product"))
        : [];
    const [searchTerm, setsearchTerm] = useState("");
    const [value, setValue] = useState("");
    const [updateSort, setUpdateSort] = useState(details)
    const [count, setCount] = useState(null)
    let navigate = useNavigate();

    //to delete product
    const removebook = (id) => {
        const filteredProducts = details.filter((product) => product.id !== id);
        const json = JSON.stringify(filteredProducts);
        localStorage.setItem("product", json);
        setUpdateSort(filteredProducts);
    }
    //to navigate form page
    const openForm = () => {
        navigate("/form");
    };
    //sorting logic
    const filter = (val) => {
        setValue(val.target.value)

        if (val.target.value === "DEFAULT") {
            return setUpdateSort(details)

        } else if (val.target.value === "ascending") {

            const updateSorted = details.sort((a, b) => {
                return a.price - b.price
            })
            setUpdateSort(updateSorted);
        } else if (val.target.value === "descending") {

            const updateSorteddes = details.sort((a, b) => {
                return b.price - a.price
            })
            setUpdateSort(updateSorteddes);
        } else if (val.target.value === "rating") {

            const updateSorteddess = details.sort((a, b) => {
                return parseInt(b.ratings) - parseInt(a.ratings)
            })
            setUpdateSort(updateSorteddess);
        }
    }

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <React.Fragment>
            <div>
                <div>
                    <button onClick={openForm} className="button">
                        Add Product
                    </button>
                    <Cart count={count} />
                    <select value={value} onChange={filter} className="filter">
                        <option value="DEFAULT" >Filter</option>
                        <option value="ascending">Low-High</option>
                        <option value="descending">High-Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div className="box">
                    <form name="search">
                        <input
                            type="search"
                            className="input"
                            name="txt"
                            placeholder="Search a book by Name or Category..."
                            onChange={(event) => {
                                setsearchTerm(event.target.value);
                            }}
                        />
                    </form>
                </div>
                <div>
                </div>
                {/* search logic */}
                <section className="booklist">
                    {updateSort && updateSort.filter((val) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (
                            val.productName
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return val;
                        } else if (
                            val.category
                                .toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return val;
                        }
                    }).map((val, key) => {
                        return (
                            // rendering Book.js component
                            <Anvesh
                                img={val.img}
                                productName={val.productName}
                                category={val.category}
                                price={val.price}
                                rating={val.ratings}
                                description={val.description}
                                key={key}
                                id={val.id}
                                removebook={removebook}
                                addCount={addCount}
                            ></Anvesh>
                        );
                    })}
                </section>
                {details.length == 0 && <div className="noProducts">
                                            <h1> No Products</h1>
                                        </div>}
            </div>
        </React.Fragment>
    );
};
export default BookLists;
