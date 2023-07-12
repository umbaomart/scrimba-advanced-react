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

import Menu from './components/Menu/index'
import './App.css'

function App() {

  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      {
        <Menu.Dropdown>
          {
            sports.map((sport, index) => (
              <Menu.Item key={index}>{sport}</Menu.Item>
            ))
          }
        </Menu.Dropdown>
      }
    </Menu>
  )
}

export default App