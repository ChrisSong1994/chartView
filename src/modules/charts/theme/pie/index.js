import Chart from "modules/charts/chart";
import baseOption from "./option";

class Pie extends Chart {
  constructor(elem, theme, option = baseOption) {
    super(elem, theme, option);
    this.theme = theme;
    this.option = option;
  }

  setStyleSetting(style) {
    this.option = Object.assign({}, this.option, style)
    this.setOption()
  }
}

export default Pie;
