import { Component } from "react";
import "./app.scss";

const a = require.context("./", true, /\.(png|jpg|jpeg|gif|svg|ts)$/);
console.log("a:", a.keys());
class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return this.props.children;
  }
}
export default App;
