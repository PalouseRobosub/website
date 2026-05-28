import React from "react";

const SponsorGrid = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-row gap-8 justify-center items-center flex-wrap">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return
        return React.cloneElement(child, {
          className: "max-w-1/4"
        })
      })}
    </div>
  )
}

export default SponsorGrid