import {ReactNode} from "react";

const CenterText = ({ children }: { children: ReactNode}) => {

  return (
    <div style={{ textAlign: "center" }}>
      {children}
    </div>
  )
}

export default CenterText;