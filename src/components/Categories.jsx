import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/slices/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-outline-light dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        📂 Categories
      </button>

      {isOpen && (
        <ul className="dropdown-menu show shadow border-0 fade-in">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li key={index}>
                <Link className="dropdown-item py-2" to={`/category/${category}`}>
                  {category}
                </Link>
              </li>
            ))
          ) : (
            <li className="dropdown-item text-muted">No categories available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Categories;
