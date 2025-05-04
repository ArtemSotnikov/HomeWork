import './App.css'
import ShoppingList from "./components/ShoppingList.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

function App() {

  return (
      <Provider store={store}>
          <ShoppingList />
      </Provider>
  )
}

export default App
