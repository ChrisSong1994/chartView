import Chart from "modules/charts/chart";
import baseOption from "./option";

class Scatter extends Chart {
  constructor(elem, theme, option = baseOption) {
    super(elem, theme, option);
    this.theme = theme;
    this.option = option;
  }

  setStyleSetting(){
    console.log("style")
  }


}

export default Scatter;
