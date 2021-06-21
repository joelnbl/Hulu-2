import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group p-2 cursor-pointer transition ease-in duration-200 
      transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}/${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}/${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt={result.title || result.original_name}
      />
      <div className="p-2">
        {/* Description */}
        <p className="truncate max-w-md">{result.overview}</p>
        {/* Movie Title */}
        <h2
          className="text-white text-2xl mt-1 transition-all 
          duration-100 ease-in-out group-hover:font-bold"
        >
          {result.title || result.original_name}
        </h2>
        {/* Release Date and Likes */}
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date} *{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
