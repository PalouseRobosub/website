

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

const cautionStripe1: React.CSSProperties = {
  width: '150vw',
  height: '60px',
  position: "relative",
  rotate: "5deg",
  top: "40px",
  background: `repeating-linear-gradient(
    45deg,
    #fdd106,
    #fdd106 30px,
    #1b1b1b 30px,
    #1b1b1b 60px
  )`,
  backgroundSize: '170px 60px',
};

const cautionStripe2: React.CSSProperties = {
  width: '150vw',
  height: '60px',
  position: "relative",
  rotate: "-185deg",
  top: "40px",
  background: `repeating-linear-gradient(
    45deg,
    #fdd106,
    #fdd106 30px,
    #1b1b1b 30px,
    #1b1b1b 60px
  )`,
  backgroundSize: '170px 60px',
};

const cautionStripe3: React.CSSProperties = {
  width: '150vw',
  height: '60px',
  position: "relative",
  rotate: "-8deg",
  bottom: "40px",
  background: `repeating-linear-gradient(
    45deg,
    #fdd106,
    #fdd106 30px,
    #1b1b1b 30px,
    #1b1b1b 60px
  )`,
  backgroundSize: '170px 60px',
};

const cautionStripe4: React.CSSProperties = {
  width: '150vw',
  height: '60px',
  position: "relative",
  rotate: "183deg",
  bottom: "40px",
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
      <div>
        <div style={cautionStripe}></div>
        <div style={cautionStripe1}></div>
        <div style={cautionStripe2}></div>
      </div>
      <p>
        We are currently in the process of overhauling our website. Check back soon for updates!
      </p>
      <div>
        <div style={cautionStripe3}></div>
        <div style={cautionStripe4}></div>
        <div style={cautionStripe}></div>
      </div>
    </main>
  );
}
