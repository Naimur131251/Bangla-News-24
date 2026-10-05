import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  // console.log(mainNews);

  return (
    <div>
      <Marquee />
      <div className="grid gap-5 grid-cols-3 container mx-auto mt-5">
        {/* news section */}
        <div className=" col-span-2 ">
          <MainNews news={mainNews} />

          <div className=" grid gap-5 mt-5">
  
          </div>
        </div>

        {/* most read section */}
        <div className=" col-span-1 ">
      
        </div>
      </div>
    </div>
  );
}
