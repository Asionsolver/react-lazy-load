import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const DemoComponent = await loadDemo(file);
    setSelectedDemo(DemoComponent);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-start h-screen mt-10">
        <h1 className="text-3xl font-bold text-blue-400">
          React Lazy load explained
        </h1>

        <div className="flex space-x-4 mt-4">
          {demos.map((demo) => (
            <button
              key={demo.id}
              className={`p-4 text-white cursor-pointer font-bold rounded-lg ${
                demo.color === "red"
                  ? "bg-red-500"
                  : demo.color === "orange"
                  ? "bg-orange-500"
                  : demo.color === "pink"
                  ? "bg-pink-500"
                  : ""
              }`}
              onClick={() => selectDemo(demo.file)}
            >
              {demo.name} Demo
            </button>
          ))}
        </div>

        <div>
          <Suspense fallback={<div>Loading...</div>}>{selectedDemo}</Suspense>
        </div>
      </div>
    </div>
  );
}
