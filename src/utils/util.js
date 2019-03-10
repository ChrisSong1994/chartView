/**
 *  生成唯一id
 * @param number  标识符长度
 * */
export function getUniqueID(length=15) {
  return (
    Math.random()
      .toString(36)
      .substr(3, length) + Date.now().toString(36)
  );
}
