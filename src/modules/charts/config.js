
let styleConfigMap = new Map()  // 所有图表的config
let dataConfigMap = new Map()

// configReq  是一个map结构  keys 输出的是获取的所有符合的路径  值是js脚本的export的接口 (模块)
let styleConfigReq = require.context("./", true, /([a-z]+[^\/])\/styleConfig\.js/);
styleConfigReq.keys().forEach(module => {
  let match = module.match(/\.\/(.*)\/styleConfig\.js/);
  let source = styleConfigReq(module).default();  // 获取export default 并执行
  const type = match[1].split("/")[1]
  styleConfigMap.set(type, source)
})

export default {
  // 获取图表的样式配置
  getConfig(type) {
    if (styleConfigMap.has(type)) {
      return styleConfigMap.get(type)
    } else {
      return
    }
  }
}