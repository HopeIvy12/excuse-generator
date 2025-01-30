import { useReducer } from "react";
import ExcuseButton from "./components/generateexcusebutton";
// import ExcusesResponse from "./components/excusesresponse";
import CategoriesContainer from "./components/categoriescontainer";

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
    <div>
      <h1>Random Excuse Generator</h1>
      <CategoriesContainer dispatch={dispatch} />
      <ExcuseButton dispatch={dispatch} category={state.category} />
      <p>{state.excuse}</p>
      {/* <ExcusesResponse excuse={excuse} /> */}
    </div>
  );
}

export default App;
