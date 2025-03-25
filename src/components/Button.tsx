import React from "react";

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: IButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
