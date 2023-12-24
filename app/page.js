import { Content } from "next/font/google";
import NavBar from "./components/navBar";
import Body from "./components/content";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div>
        <NavBar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
