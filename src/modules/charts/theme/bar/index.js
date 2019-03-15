import Chart from "../chart";

class Bar extends Chart {
  constructor(option, el, theme, props) {
    super(option, el, theme, props);
    this.theme = theme;
    this.option = option;
    this.id = props.widgetId;
  }
}

export default Bar;
