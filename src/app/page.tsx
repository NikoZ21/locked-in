import Step from "@/components/Step";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 gap-12">
      <h1 className="text-4xl font-bold">Step-By-Step</h1>
      <div className="flex flex-row gap-20">
        {/* Steps section on the left */}
        <div className="relative flex flex-col">
          <Step bgColor="bg-custom-primary" number={1} />
          <Step bgColor="bg-custom-primary" number={2} />
          <Step bgColor="bg-custom-primary" number={3} isLast />
        </div>

        {/* Input and button section on the right */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="bg-custom-card-background rounded-lg p-4 w-80">
            <label
              htmlFor="default-input"
              className="block mb-3 text-sm font-medium text-custom-accent"
            >
              Enter New Step
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-custom-background border-2 border-custom-input-border text-white text-sm rounded-lg focus:ring-2 focus:ring-custom-accent focus:border-custom-accent block w-full p-3 placeholder-gray-400 transition-all duration-200 hover:border-custom-secondary"
              placeholder="Enter your step description..."
            />
          </div>
          <button className="bg-custom-primary text-white px-6 py-3 rounded-lg font-semibold self-end">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
