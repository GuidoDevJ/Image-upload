import DragDropZone from "../../components/DragZone"
import Header from "../../components/Header"

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#F9FAFB] dark:bg-[#121826]">
        <Header/>
        <DragDropZone/>
    </div>
  )
}

export default Home