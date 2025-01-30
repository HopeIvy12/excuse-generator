import { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";

export default function CategoriesContainer({ dispatch }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Select a Category</h2>
      <div className="categories-container">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              dispatch={dispatch}
            />
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
}
