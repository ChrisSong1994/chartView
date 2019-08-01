export const UPDATE_WINDOW_SETTING = "UPDATE_WINDOW_SETTING"

export const updateWindowSetting = (key, value) => {
  return { type: UPDATE_WINDOW_SETTING, key, value };
}
