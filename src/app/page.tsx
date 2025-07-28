import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8">
      <Task stepNumber={1} title="Setup Project" />
      <Task stepNumber={2} title="Design UI" />
      <Task stepNumber={3} title="Deploy App" isLast={true} />
    </div>
  );
}
