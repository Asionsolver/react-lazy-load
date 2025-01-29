import { Circle } from "react-feather";

const SizeDemo = () => {
  const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];

  return (
    <>
      <h1 className="text-2xl font-bold text-red-400 text-center mt-4">
        Size Demo
      </h1>
      <div className="flex justify-center space-x-4 mt-4">
        {sizeMap.map((size, index) => (
          <Circle color="black" fill="black" key={index} size={size} />
        ))}
      </div>
    </>
  );
};

export default SizeDemo;
