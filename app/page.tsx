import About from "./components/landing-page/About";
import Title from "./components/landing-page/Title";

export default function Home() {
  return (
    <div className="flex-col space-y-32 ">
      <Title />
      <About />
    </div>
  );
}
