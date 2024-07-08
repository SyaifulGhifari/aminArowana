import Home from "@/src/sections/Home/Section";
import About from "@/src/sections/About/Section";
import Arowana from "@/src/sections/Arowana/Section";
import Service from "@/src/sections/Service/Section";

export default function Page() {
  return (
    <>
    <div className="bg-black">
      <Home/>
      <About/>
      <Arowana/>
      <Service/>
    </div>
    </>
  );
}
