import About from "@/components/About";
import ChefsWord from "@/components/ChefsWord";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <MenuList />
      <ChefsWord />
    </main>
  );
}
