// import Star from "./Star";
import Menu from "./components/Menu/index";

function App() {
  return (
    <>
      <Menu onOpen={() => console.log("Opened/Closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

{/* <Star /> */}
{/* <Toggle onToggle={() => console.log('Toggled')}>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return (
                <div className={`box ${on ? 'filled' : ''}`}></div>
              )
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle> */}

// <br />
export default App;