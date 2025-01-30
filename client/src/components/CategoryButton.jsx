import { FaCheckCircle } from "react-icons/fa";

export default function CategoryButton({ category, dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "SET_CATEGORY", payload: category })}
      className="category-btn"
    >
      {category}
    </button>
  );
}
