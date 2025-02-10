import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function ExcuseButton({ category, dispatch }) {
  const [loading, setLoading] = useState(false);

  const fetchRandomExcuse = async () => {
    if (!category) return;
    setLoading(true);

    try {
      const formattedCategory = encodeURIComponent(category);
      const response = await fetch(
        `https://excuse-generator-7oxp.vercel.app${formattedCategory}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      dispatch({ type: "SET_EXCUSE", payload: data.text });
    } catch (error) {
      console.error("Error fetching excuse:", error);
      dispatch({
        type: "SET_EXCUSE",
        payload: "Failed to load excuse. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={fetchRandomExcuse}
      disabled={!category || loading}
      className={`generate-btn ${category ? "active" : "disabled"}`}
    >
      {loading ? <FaSpinner className="spinner" /> : "🎲 Generate Excuse"}
    </button>
  );
}
