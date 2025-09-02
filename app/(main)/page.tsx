const cautionStripe: React.CSSProperties = {
  width: '150vw',
  height: '60px',
  position: "relative",
  background: `repeating-linear-gradient(
    45deg,
    #fdd106,
    #fdd106 30px,
    #1b1b1b 30px,
    #1b1b1b 60px
  )`,
  backgroundSize: '170px 60px',
};

export default function Home() {
  return (
    <main style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <div style={cautionStripe}></div>
      <p>
        We are currently in the process of overhauling our website. Check back soon for updates!
      </p>
      <p>
        While you wait, why don&apos;t you check out our <a href="https://www.linkedin.com/company/105879707/">Linkedin</a> or <a href="mailto:robosub.vcea@wsu.edu">email us</a>!
      </p>
      <div style={cautionStripe}></div>
    </main>
  );
}
