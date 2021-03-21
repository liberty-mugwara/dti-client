export const spacesGenerator = type => {
  return (coordinate, value) => {
    let values = "";
    switch (coordinate) {
      case "x":
        return `${type}-left: ${value};${type}-right: ${value}`;
      case "y":
        return `${type}-top: ${value};${type}-bottom: ${value}`;
      case "t":
        return `${type}-top: ${value};`;
      case "r":
        return `${type}-right: ${value};`;
      case "b":
        return `${type}-bottom: ${value};`;
      case "t":
        return `${type}-left: ${value};`;
      default:
        return "";
    }
  };
};

export const setPadding = spacesGenerator("padding");

export const setMargin = spacesGenerator("margin");
