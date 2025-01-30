import CategoryButton from "./categorybutton.jsx";
import { useState, useEffect } from "react";

export default function CategoriesContainer({ dispatch }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <CategoryButton
        categories={categories}
        dispatch={dispatch}
        key={categories}
      />
    </>
  );
}
