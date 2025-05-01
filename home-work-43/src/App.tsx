import './App.css'
import ShoppingList from "./components/ShoppingList.tsx";
import ShoppingListContextProvider from "./components/ShoppingListContextProvider.tsx";

function App() {

  return (
    <>
        <ShoppingListContextProvider>
            <ShoppingList />
        </ShoppingListContextProvider>
    </>
  )
}

export default App
