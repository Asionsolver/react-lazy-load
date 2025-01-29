import { Box, Circle, Heart, Hexagon, Square, Triangle } from "react-feather";

const ShapeDemo = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-400 text-center mt-4">
        Shape Demo
      </h1>
      <div className="flex justify-center space-x-4 mt-4">
        <Square color="black" size={128} />
        <Triangle color="black" size={128} />
        <Circle color="black" size={128} />
        <Box color="black" size={128} />
        <Heart color="black" size={128} />
        <Hexagon color="black" size={128} />
      </div>
    </>
  );
};

export default ShapeDemo;
