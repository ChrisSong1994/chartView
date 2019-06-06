import Chart from "modules/charts/chart";
import baseOption from "./option";

class Bar extends Chart {
  constructor(elem, theme, option = baseOption) {
    super(elem, theme, option);
    this.theme = theme;
    this.option = option;
  }

  setStyleSetting(style) {
    this.option = Object.assign({}, this.option, style)
    console.log(this.option,'this.option')
    this.setOption()
  }

}

export default Bar;
