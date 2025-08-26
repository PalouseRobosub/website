const Divider = ({ width }: { width: string|undefined }) => {
  
  const style: React.CSSProperties = {
    backgroundImage: "repeating-linear-gradient(135deg,#ca1237,#ca1237 2px,transparent 2px,transparent 10px)",
    height: "35px",
    margin: "8px auto",
    width: width
  }
  
  return (
    <div style={style}></div>
  )
}

export default Divider;