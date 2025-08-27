

const cautionStripe: React.CSSProperties = {
  width: '100%',
  height: '100px',
  background: `repeating-linear-gradient(
    45deg,
    #fdd106,
    #fdd106 30px,
    #1b1b1b 30px,
    #1b1b1b 60px
  )`,
};

export default function Home() {
  return (
    <main style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <div style={cautionStripe}></div>
      <p>
        We are currently in the process of overhauling our website. Check back soon for updates!
      </p>
      <div style={cautionStripe}></div>
    </main>
  );
}
