import Hero from "@/components/hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <div> 
      <Hero imgData={homeImg} imgAlt="this is main page picture" title="welcome to my working website with nextjs" />
    </div>
  );
}
