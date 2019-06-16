import ChartCreator from "./chartCreator"
const req = require.context('./theme', true, /(^\.\/[a-zA-Z]+[^\/])\/index\.js/)
const charts = {}

let modules = req.keys().filter((item) => {
  return item.match(/\//g).length === 2 && !item.includes('util')
})

modules.forEach(module => {
  let match = module.match(/\.\/([a-zA-Z]+)\//)
  if (match) {
    let dir = match[1]
    charts[dir] = req(module).default
  }
})


Object.keys(charts).map( (item) => {
  ChartCreator.register(item, charts[item])
})

export default ChartCreator