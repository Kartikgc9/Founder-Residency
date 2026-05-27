// Pixel-art SVG illustrations for the Delhi skyline + rocket + icons

export function PixelIndiaGate({ className = "" }) {
  // Each "px" = 6px square
  const P = 6;
  const grid = [
    "..........11..........",
    ".........1111.........",
    "........111111........",
    "....1111111111111.....",
    "....1...........1.....",
    "....1.111111111.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "....1.122222221.1.....",
    "..1111111111111111....",
    "..1................1..",
    "..1................1..",
    "..1................1..",
    "11111111111111111111..",
  ];
  return (
    <svg
      viewBox={`0 0 ${22 * P} ${grid.length * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          const color = c === "1" ? "#d5f04e" : "#082b3b";
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={color} />;
        })
      )}
    </svg>
  );
}

export function PixelQutub({ className = "" }) {
  const P = 5;
  const grid = [
    ".....11.....",
    "....1111....",
    "....1111....",
    "...111111...",
    "...111111...",
    "...111111...",
    "..11111111..",
    "..11111111..",
    "..11111111..",
    "..11111111..",
    ".1111111111.",
    ".1111111111.",
    ".1111111111.",
    ".1111111111.",
    "111111111111",
    "111111111111",
    "111111111111",
    "111111111111",
  ];
  return (
    <svg
      viewBox={`0 0 ${12 * P} ${grid.length * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill="#d5f04e" />;
        })
      )}
    </svg>
  );
}

export function PixelBuilding({ tall = false, className = "" }) {
  const P = 4;
  const w = 14;
  const h = tall ? 28 : 18;
  const rows = [];
  for (let y = 0; y < h; y++) {
    let r = "";
    for (let x = 0; x < w; x++) {
      if (x === 0 || x === w - 1 || y === 0) {
        r += "1";
      } else if ((x + y) % 3 === 0 && y > 1 && y < h - 1) {
        r += "2"; // window lit
      } else {
        r += "3";
      }
    }
    rows.push(r);
  }
  return (
    <svg
      viewBox={`0 0 ${w * P} ${h * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {rows.map((row, y) =>
        [...row].map((c, x) => {
          let fill = "#082b3b";
          if (c === "1") fill = "#0a2f3f";
          if (c === "2") fill = "#d5f04e";
          if (c === "3") fill = "#0d3b4f";
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={fill} />;
        })
      )}
    </svg>
  );
}

export function PixelMoon({ className = "" }) {
  const P = 4;
  const grid = [
    "..1111..",
    ".112221.",
    "11222211",
    "11222211",
    "11222211",
    "11222211",
    ".112221.",
    "..1111..",
  ];
  return (
    <svg
      viewBox={`0 0 ${8 * P} ${8 * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          const fill = c === "1" ? "#a8c13a" : "#d5f04e";
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={fill} />;
        })
      )}
    </svg>
  );
}

export function PixelCloud({ className = "", color = "#1a4d63" }) {
  const P = 4;
  const grid = [
    "..1111..",
    ".111111.",
    "11111111",
    ".111111.",
  ];
  return (
    <svg
      viewBox={`0 0 ${8 * P} ${4 * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={color} />;
        })
      )}
    </svg>
  );
}

export function PixelRocket({ className = "" }) {
  const P = 5;
  const grid = [
    "...11...",
    "..1221..",
    "..1221..",
    ".122221.",
    ".122221.",
    ".133331.",
    "11333311",
    "11.33.11",
    "...44...",
    "..4554..",
  ];
  return (
    <svg
      viewBox={`0 0 ${8 * P} ${10 * P}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          const colors = { 1: "#d5f04e", 2: "#f0e8d2", 3: "#a8c13a", 4: "#ff6b35", 5: "#ffd23f" };
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={colors[c]} />;
        })
      )}
    </svg>
  );
}

export function PixelDataDog({ className = "" }) {
  const P = 5;
  const grid = [
    "..111111..",
    ".11111111.",
    "1111111111",
    "1111..1111",
    "1111..1111",
    ".11111111.",
    "..1111111.",
    "...11111..",
    "..111111..",
    ".11...11..",
  ];
  return (
    <svg viewBox={`0 0 ${10 * P} ${grid.length * P}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill="#7c3aed" />;
        })
      )}
    </svg>
  );
}

export function PixelNodeOps({ className = "" }) {
  const P = 5;
  const grid = [
    "111....111",
    "1111...111",
    "11111..111",
    "111.11.111",
    "111..11111",
    "111...1111",
    "111....111",
    "111....111",
  ];
  return (
    <svg viewBox={`0 0 ${11 * P} ${grid.length * P}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill="#0ea5e9" />;
        })
      )}
    </svg>
  );
}

export function PixelStar({ className = "", size = 8 }) {
  return (
    <svg viewBox="0 0 8 8" className={className} shapeRendering="crispEdges" width={size} height={size} aria-hidden>
      <rect x="3" y="0" width="2" height="2" fill="#d5f04e" />
      <rect x="0" y="3" width="2" height="2" fill="#d5f04e" />
      <rect x="6" y="3" width="2" height="2" fill="#d5f04e" />
      <rect x="3" y="6" width="2" height="2" fill="#d5f04e" />
      <rect x="3" y="3" width="2" height="2" fill="#f0e8d2" />
    </svg>
  );
}

export function PixelArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 12 8" className={className} shapeRendering="crispEdges" aria-hidden>
      <rect x="0" y="3" width="9" height="2" fill="currentColor" />
      <rect x="7" y="1" width="2" height="2" fill="currentColor" />
      <rect x="9" y="3" width="2" height="2" fill="currentColor" />
      <rect x="7" y="5" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function PixelCalendar({ className = "" }) {
  const P = 4;
  const grid = [
    "1.1.1.1.",
    "11111111",
    "1.....11",
    "1.1.1.11",
    "11111111",
    "1.1.1.11",
    "11111111",
  ];
  return (
    <svg viewBox={`0 0 ${8 * P} ${7 * P}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.map((row, y) =>
        [...row].map((c, x) => c === "1" && <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill="#d5f04e" />)
      )}
    </svg>
  );
}

export function PixelPeople({ className = "" }) {
  const P = 4;
  const grid = [
    "..11.11.",
    ".1111111",
    ".1111111",
    "11111111",
    "1.111.1.",
    "1.111.1.",
  ];
  return (
    <svg viewBox={`0 0 ${8 * P} ${6 * P}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.map((row, y) =>
        [...row].map((c, x) => c === "1" && <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill="#d5f04e" />)
      )}
    </svg>
  );
}

export function PixelPin({ className = "" }) {
  const P = 4;
  const grid = [
    ".1111.",
    "111111",
    "11221.",
    "11221.",
    "11111.",
    ".111..",
    ".11...",
    ".1....",
  ];
  return (
    <svg viewBox={`0 0 ${6 * P} ${8 * P}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.map((row, y) =>
        [...row].map((c, x) => {
          if (c === ".") return null;
          const fill = c === "1" ? "#d5f04e" : "#082b3b";
          return <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={fill} />;
        })
      )}
    </svg>
  );
}
