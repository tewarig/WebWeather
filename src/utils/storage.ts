export interface localStorage {
  cities?: string[];
}
export type localStorageKeys = keyof localStorage;

export function setStorageCities(cities: string[]): Promise<void> {
  const vals: localStorage = {
    cities,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStorageCities(): Promise<string[]> {
  const keys: localStorageKeys[] = ["cities"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: localStorage) => {
      resolve(res.cities ?? []);
    });
  });
}
