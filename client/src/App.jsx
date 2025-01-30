import CategoriesContainer from "./components/CategoriesContainer";
import ExcuseButton from "./components/ExcuseButton";
import { useReducer } from "react";

const initialState = { category: null, excuse: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload, excuse: "" };
    case "SET_EXCUSE":
      return { ...state, excuse: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Random Excuse Generator</h1>
      <CategoriesContainer dispatch={dispatch} />
      <ExcuseButton category={state.category} dispatch={dispatch} />
      <p className="excuse-box">
        {state.excuse || "Select a category and generate an excuse!"}
      </p>
    </div>
  );
}

export default App;
