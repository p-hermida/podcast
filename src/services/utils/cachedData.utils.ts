import axios, { AxiosResponse } from "axios";

export const cachedData = <T>(
  storageKey: string, 
  url: string, 
  adapter: (data: AxiosResponse) => T
): Promise<T> => {
  const cachedData = localStorage.getItem(storageKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    return Promise.resolve(parsedData);
  }

  return axios
    .get(url)
    .then((response: AxiosResponse) => {
      const dataAdapted = adapter(response);
      localStorage.setItem(storageKey, JSON.stringify(dataAdapted));

      const expirationTime = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      const expirationDate = currentTime + expirationTime;

      localStorage.setItem(storageKey + "_expires", expirationDate.toString());

      return dataAdapted;
    });
}
