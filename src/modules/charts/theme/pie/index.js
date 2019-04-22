import Chart from "modules/charts/chart";
import baseOption from "./option";

class Pie extends Chart {
  constructor(elem, theme, option = baseOption) {
    super(elem, theme, option);
    this.theme = theme;
    this.option = option;
  }
}

export default Pie;