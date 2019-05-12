import Chart from "modules/charts/chart";
import baseOption from "./option";

class Bar extends Chart {
  constructor(elem, theme, option = baseOption) {
    super(elem, theme, option);
    this.theme = theme;
    this.option = option;
  }

  setStyleSetting(style){
    console.log(style)
    console.log(this.option)
  }

}

export default Bar;
