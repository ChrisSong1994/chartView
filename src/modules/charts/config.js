
let configMap = new Map()

function getConfigMap(type) {
  let configReq = require.context("./", true, /([a-z]+[^\/])\/config\.js/);
  // configReq  是一个map结构  keys 输出的是获取的所有符合的路径  值是js脚本的export的接口 (模块)

  configReq.keys().forEach(module => {
    console.log(module)
    let match = module.match(/\.\/(.*)\/config\.js/);
    let source = configReq(module).default;
    console.log(source)
    console.log(match)
    console.log(configReq.resolve(module))

  })


  console.log(configReq.id)
}

export default {
  getConfig() {
    getConfigMap()
  }
}