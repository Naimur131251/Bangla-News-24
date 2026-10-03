import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative mx-auto container px-4 py-4">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>

      <div className="absolute right-0 top-5">
        <button className="btn">সাইন ইন</button>
        <button className="btn bg-[#c10007] text-white">সাইন আপ</button>
      </div>
    </header>
  );
};

export default Header;
