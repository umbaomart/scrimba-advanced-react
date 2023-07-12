// import React from 'react'
// import Header from './components/Header'
// import Button from './components/Button'

// import './App.css'

// const ThemeContext = React.createContext()

// export default function App() {

//   return (
//     <ThemeContext.Provider value={'dark'}>
//       <div className="containerdark-theme">
//         <Header />
//         <Button />
//       </div>
//     </ThemeContext.Provider>
//   )
// }

// export { ThemeContext }

import Menu from './components/Menu'
import MenuButton from './components/MenuButton'
import MenuDropdown from './components/MenuDropdown'
import MenuItem from './components/MenuItem'

import './App.css'

function App() {

  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      {
        <MenuDropdown>
          {
            sports.map((sport, index) => (
              <MenuItem key={index}>{sport}</MenuItem>
            ))
          }
        </MenuDropdown>
      }
    </Menu>
  )
}

export default App