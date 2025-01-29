import { useState } from "react";
import ShapeDemo from "./components/ShapeDemo";
import ColorDemo from "./components/ColorDemo";
import SizeDemo from "./components/SizeDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemo = (type) => {
    setSelectedDemo(type);
  };

  return (
    <div>
      <div className=" flex flex-col items-center justify-start h-screen mt-10">
        <h1 className="text-3xl font-bold text-blue-400">
          React Lazy load explained
        </h1>

        <div className="flex space-x-4 mt-4">
          <button
            className="p-4 bg-orange-500 rounded-lg"
            onClick={() => selectDemo("shape")}
          >
            Shape Demo
          </button>
          <button
            className="p-4 bg-sky-500 rounded-lg"
            onClick={() => selectDemo("color")}
          >
            Color Demo
          </button>
          <button
            className="p-4 bg-red-500 rounded-lg"
            onClick={() => selectDemo("size")}
          >
            Size Demo
          </button>
        </div>

        <div>
          {selectedDemo === "shape" && <ShapeDemo />}
          {selectedDemo === "color" && <ColorDemo />}
          {selectedDemo === "size" && <SizeDemo />}
        </div>
      </div>
    </div>
  );
}
