const rgb_to_hex = (rgb) => {
  const data = rgb.slice(4,-1).split(",");

  const red = parseInt(data[0]);
  const green = parseInt(data[1]);
  const blue = parseInt(data[2]);

  return `#${(blue | (green << 8) | (red << 16)).toString(16).padStart(6, '0')}`;
};

export default rgb_to_hex;
