interface TaskProps {
  stepNumber: number;
  title: string;
  isLast?: boolean;
}

export default function Task({ stepNumber, title, isLast }: TaskProps) {
  return (
    <div className="flex flex-col">
      {/* Main row with circle and title */}
      <div className="flex items-center">
        {/* Circle with number */}
        <div
          className="flex items-center justify-center rounded-full w-16 h-16 text-white font-bold text-xl"
          style={{ backgroundColor: "#4ECCA3" }}
        >
          {stepNumber}
        </div>

        {/* Task title */}
        <span className="ml-6 text-lg font-medium" style={{ color: "#EEEEEE" }}>
          - {title}
        </span>
      </div>

      {/* Vertical connecting line to next task */}
      {!isLast && (
        <div className="w-1 h-12 ml-8" style={{ backgroundColor: "#4ECCA3" }} />
      )}
    </div>
  );
}
