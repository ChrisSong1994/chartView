import http from '../http'

// 查询窗口
export function queryWindows(data) {
  return http.post('/api/window/getWindows', data)
}

// 获取窗口详情
export function getWindowById(id) {
  return http.get(`/api/window/getWindow/${id}`)
}

// 新增窗口
export function addWindow(data) {
  return http.post('/api/window/addWindow', data)
}

// 更新窗口
export function updateWindow(data) {
  return http.post('/api/window/updateWindow', data)
}

// 删除窗口
export function deleteWindow(data) {
  return http.post('/api/window/deleteWindow', data)
}