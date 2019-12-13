import React from "react";
import classNames from "classnames";

interface BlockProps {
  className?: string;
  title: string;
}

const Block: React.FC<BlockProps> = ({ children, title, className }) => {
  return (
    <div className={classNames(className, "bg-blue-300 px-12 py-8 my-24")}>
      <div className="flex justify-center">
        <div className="bg-blue-200 px-4 py-2">
          <h1 className="text-xl text-blue-700 font-bold uppercase tracking-wide">
            {title}
          </h1>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Block;
