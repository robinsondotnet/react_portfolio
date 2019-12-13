import React from "react";
import classNames from "classnames";
import Block from "../components/Block";
import Project from "../components/Project";
import Article from "../components/Article";

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
        "px-8 py-4 my-16 mr-12": size === "md",
        "px-12 py-8 my-24": size === "lg"
      })}
    >
      {children}
    </div>
  );
};

const IndexPage: React.FC<{}> = () => {
  return (
    <div className="min-h-screen flex bg-blue-200 text-blue-700">
      <div className="w-1/3">
        <div className="flex justify-center items-center flex-col py-8">
          <h1 className="text-3xl mb-4 text-gray-800">@robinsondotnet</h1>
          <img src="/logo.jpg" alt="robot" className="rounded-full w-48 h-48" />
        </div>

        <LeftBlock>About</LeftBlock>

        <LeftBlock>Social</LeftBlock>

        <LeftBlock>Message</LeftBlock>
      </div>

      <div className="w-full">
        <Block title="Projects">
          <div className="mt-8 flex justify-between">
            <Project title="DotNet">Some text about dotnet</Project>
            <Project title="JavaScript" className="mx-2">
              Some text about js
            </Project>
            <Project title="Software Dev">Some text about sf</Project>
          </div>
          <div className="mt-8 flex">
            <Project title="Open Source Projects" className="flex-auto">
              Foo
            </Project>
          </div>
        </Block>

        <Block title="Blog">
          <div className="mt-8 flex justify-between">
            <Article title="Article 1"></Article>
            <Article title="Article 2" className="mx-2"></Article>
            <Article title="Article 3"></Article>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default IndexPage;
