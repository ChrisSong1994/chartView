/**
 *  生成唯一id
 * */
export function generateUUID() {
  let d = new Date().getTime();
  let uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x7) | 0x8).toString(16);
  });
  return uuid;
}

export function parseKeyToObj(key, value) {
  if (typeof key !== "string") return
  let obj = {}
  const keyArr = key.split("_")
  for (let i = 0; i < keyArr.length; i++) {
  
  }
}