import useTitle from "../hooks/useTitle"
import Todos from "./Todos";


const Home = () => {
  useTitle("Dashboard");
  return (
    <>
        <Todos />
    </>
  )
}

export default Home