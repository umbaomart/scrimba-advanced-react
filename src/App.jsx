// import React from 'react'
// import Header from './components/theme-switcher/Header'
// import ThemeButton from './components/theme-switcher/ThemeButton'

// import './Theme.css'

// const ThemeContext = React.createContext()

// export default function App() {
//   const [theme, setTheme] = React.useState('light')

//   function toggleTheme() {
//     setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
//   }

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <div className={`container ${theme}-theme`}>
//         <Header />
//         <ThemeButton />
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