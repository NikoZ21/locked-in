interface StepProps {
  number: number;
  bgColor?: string;
  isLast?: boolean;
}

export default function Step({
  number,
  bgColor = "bg-red-500",
  isLast = false,
}: StepProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Div 1 */}
      <div
        className={`flex justify-center items-center w-20 h-20 ${bgColor} rounded-full border-2 border-white z-10 relative`}
      >
        {number}
      </div>
      {!isLast && <div className="w-1 h-20 bg-gray-400 my-4"></div>}
    </div>
  );
}
