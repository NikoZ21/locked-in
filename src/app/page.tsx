import Step from "@/components/Step";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-start h-screen p-8 gap-12">
      {/* Steps section on the left */}
      <div className="relative flex flex-col">
        <Step bgColor="bg-green-500" number={1} />
        <Step bgColor="bg-gray-500" number={2} />
        <Step bgColor="bg-gray-500" number={3} isLast />
      </div>

      {/* Input and button section on the right */}
      <div className="flex flex-col gap-4 pt-8">
        <div className="bg-gray-700 rounded-lg p-4 w-80">
          <input
            type="text"
            placeholder="Add your text..."
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
          />
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold self-end">
          Add
        </button>
      </div>
    </div>
  );
}
