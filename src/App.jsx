import Toggle from "./components/Toggle/index"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return (
                <div className={`box ${on ? 'filled' : ''}`}></div>
              )
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

// <Star />

// <br />

// <Menu>
//   <Menu.Button>Menu</Menu.Button>
//   <Menu.Dropdown>
//     <Menu.Item>Home</Menu.Item>
//     <Menu.Item>About</Menu.Item>
//     <Menu.Item>Contact</Menu.Item>
//     <Menu.Item>Blog</Menu.Item>
//   </Menu.Dropdown>
// </Menu>

export default App;