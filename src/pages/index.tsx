import React from "react";
import classNames from "classnames";
import Block from "../components/Block";

interface LeftBlockProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LeftBlock: React.FC<LeftBlockProps> = ({
  children,
  className,
  size = "md"
}) => {
  return (
    <div
      className={classNames(className, "bg-blue-300", {
        "px-4 py-2 my-8": size === "sm",
        "px-8 py-4 my-16": size === "md",
        "px-12 py-8 my-24": size === "lg"
      })}
    >
      {children}
    </div>
  );
};

interface ProjectProps {
  title: string;
  className?: string;
}

const Project: React.FC<ProjectProps> = ({ children, className, title }) => {
  return (
    <div className={classNames(className, "bg-blue-200 w-1/3 text-blue-700")}>
      <div className="border-b-2 border-blue-300 py-2">
        <h2 className="text-center font-bold  uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="py-2 px-4">{children}</div>
    </div>
  );
};

const IndexPage: React.FC<{}> = () => {
  return (
    <div className="min-h-screen flex bg-indigo-300">
      <div className="bg-green-300 w-1/3">
        <div className="flex justify-center items-center flex-col py-8">
          <h1 className="text-3xl mb-4">@robinsondotnet</h1>

          <img src="/logo.jpg" alt="robot" className="rounded-full w-48 h-48" />
        </div>

        <LeftBlock>About</LeftBlock>

        <LeftBlock>Social</LeftBlock>

        <LeftBlock>Message</LeftBlock>
      </div>

      <div className="bg-pink-300 w-full">
        <Block title="Projects">
          <div className="mt-8 flex justify-between">
            <Project title="DotNet">Some text about dotnet</Project>
            <Project title="JavaScript" className="mx-2">
              Some text about js
            </Project>
            <Project title="Software Dev">Some text about sf</Project>
          </div>
        </Block>

        <Block title="Blog">
          <div>
            <p>Hello</p>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default IndexPage;
