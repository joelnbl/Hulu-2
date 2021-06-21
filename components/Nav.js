import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-5 sm:px-14 whitespace-nowrap text-2xl 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-12 cursor-pointer transition duration-100 transform
            hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 bg-gradient-to-l 
      from-[#06202a] h-10 w-1/12"
      />
    </nav>
  );
}