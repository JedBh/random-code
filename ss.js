class Color {
  constructor(r, g, b, name = "n/a") {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHsl();
  }
  rgbBase() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.rgbBase()})`;
  }
  hex() {
    let { r, g, b } = this;
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  }
  calcHsl() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    // Calculate hue
    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    this.h = h;
    this.s = s;
    this.l = l;
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  opposite() {
    let { h, s, l } = this;
    h = (h + 180) % 360;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  fullSaturation() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }
}

const genRanColor = () => {
  const r = Math.floor(Math.random() * 255) - 1;
  const g = Math.floor(Math.random() * 255) - 1;
  const b = Math.floor(Math.random() * 255) - 1;
  return [r, g, b];
};

const genRanColorList = (length) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(new Color(...genRanColor()));
  }
  return arr;
};

const epelepOverArr = (arr, element = document.body, delay = 200) => {
  let i = 0;
  setInterval(() => {
    element.style.backgroundColor = arr[i].fullSaturation();
    i += 1;
    if (!arr[i]) {
      i = 0;
    }
  }, delay);
};

// DOM
const container = document.querySelector(".container");

const createElement = (element, classL, num, parent = document.body) => {
  for (let i = 0; i < num; i++) {
    let ele = document.createElement(element);
    element.classList.add(classL);
    parent.appendChild(element);
  }
};

createElement("div", "");
