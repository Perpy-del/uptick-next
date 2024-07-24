import BlogComponent from "@/components/BlogComponent";
import CategoryComponent from "@/components/CategoryComponent";
import HeroComponent from "@/components/HeroComponent";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar activeCategory={undefined} setActiveCategory={undefined} />
      <HeroComponent />
      <CategoryComponent />
      <BlogComponent />
    </main>
  );
}
