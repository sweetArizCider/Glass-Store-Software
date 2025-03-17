import "./Home.css";
import NavBar from "../layouts/NavBar";
import SmallNavBar from "../layouts/SmallNavBar";
import { MainBanner } from "../layouts/banners/MainBanner";
import { Categories } from "./categories/Categories";



function Home() {
  return (
    <>
        <NavBar/>
        <SmallNavBar/>
        <MainBanner/>
        <Categories/>
    </>
  );
}

export default Home;