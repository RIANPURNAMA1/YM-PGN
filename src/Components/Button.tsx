interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}
export default function Button({ children, onClick}: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  );
}
