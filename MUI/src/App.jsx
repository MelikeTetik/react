import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MUIButton from './components/MUIButton';
import MUITextField from './components/MUITextField';
import MUISelect from './components/MUISelect';
import MUICheckbox from './components/MUICheckbox';
import MUIAutoComplete from './components/MUIAutoComplete';

function App() {


  return (
    <>
      <div>
        {/* <MUIButton/> */}
        {/* <MUITextField /> */}
        {/* <MUISelect /> */}
        {/* <MUICheckbox /> */}
        <MUIAutoComplete />
      </div>

    </>
  )
}

export default App
