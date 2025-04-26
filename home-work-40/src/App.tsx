
import './App.css'
import ControlledSelect from "./components/ControlledSelect.tsx";
import UncontrolledCheckbox from "./components/UncontrolledCheckbox.tsx";
import EffectDemoFetchPost from "./components/EffectDemoFetchPost.tsx";

function App() {


  return (
    <>
        <ControlledSelect/>
        <hr/>
        <UncontrolledCheckbox/>
        <hr/>
        <EffectDemoFetchPost/>
    </>
  )
}

export default App
