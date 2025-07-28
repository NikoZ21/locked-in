import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center gap-40">
      <div className="flex flex-col gap-2 w-fit">
        <Task stepNumber={1} title="Setup Project" />
        <Task stepNumber={2} title="Design UI" />
        <Task stepNumber={3} title="Deploy App" isLast={true} />
      </div>
      <div className="flex flex-col gap-4 w-fit">
        <input
          type="text"
          placeholder="Add your text..."
          className="bg-secondary text-text rounded-lg px-4 py-3 w-80 text-base placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="bg-accent text-white font-semibold text-lg px-6 py-1 rounded-lg hover:bg-opacity-90 transition-all duration-200 w-24 self-end">
          Add
        </button>
      </div>
    </div>
  );
}
