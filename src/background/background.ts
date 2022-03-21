import { setStorageCities } from "../utils/storage";
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
  setStorageCities([]);
});
