export default function CategoryButton({ category, dispatch }) {
  return (
    <>
      <button
        onClick={() => dispatch({ type: "SET_CATEGORY", payload: category })}
      >
        {category}
      </button>
    </>
  );
}
