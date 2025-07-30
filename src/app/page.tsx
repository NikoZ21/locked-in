import Step from "@/components/Step";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="relative flex flex-col items-center">
        {/* Div 1 */}
        {/* <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full border-2 border-white z-10 relative">
          01
        </div> */}

        <Step bgColor="bg-red-500" number={1} />
        <Step bgColor="bg-blue-500" number={2} />
        <Step bgColor="bg-green-500" number={3} isLast />
      </div>
    </div>
  );
}
