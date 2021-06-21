import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }) {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
      3xl:flex flex-wrap justify-center"
    >
      {results.map((res) => (
        <Thumbnail key={res.id} result={res} />
      ))}
    </FlipMove>
  );
}