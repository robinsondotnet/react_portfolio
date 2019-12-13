import React from "react";
import classNames from "classnames";

interface ProjectProps {
  title: string;
  className?: string;
}

const Project: React.FC<ProjectProps> = ({ children, className, title }) => {
  return (
    <div className={classNames(className, "bg-blue-200 w-1/3")}>
      <div className="border-b-2 border-blue-300 py-2">
        <h2 className="text-center font-bold  uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="py-2 px-4">{children}</div>
    </div>
  );
};

export default Project;
