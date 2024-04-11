import useDarkMode from "../../Hooks/DarkMode"
import Logo from "../../ui/Logo/Logo"
import Moon from "../../assets/Moon_fill.svg"
import Sun from "../../assets/Sun_fill.svg"


const Header = () => {
    const {moon,handlemoon} = useDarkMode()
    const showMoon = () => (moon ?<img src={Sun} alt="sun" /> : <img src={Moon} alt="moon" />)
  return (
    <div className="w-screen h-[10vh] border-b-2 border-solid border-[#E5E7EB] dark:border-[#4D5562] flex justify-between items-center pr-4 pl-4">
        <Logo dark={moon}/>
        <button onClick={handlemoon} className="w-10 h-10 shadow rounded flex justify-center items-center dark:bg-[#4D5562]">
            {
                showMoon()
            } 
        </button>
    </div>
  )
}

export default Header