import { Circle } from "react-feather";

const ColorDemo = () => {
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <>
      <h1 className="text-2xl font-bold text-red-400 text-center mt-4">
        Color Demo
      </h1>
      <div className="flex justify-center space-x-4 mt-4">
        {colorMap.map((color, index) => (
          <Circle color={color} fill={color} key={index} size={128} />
        ))}
      </div>
    </>
  );
};

export default ColorDemo;
