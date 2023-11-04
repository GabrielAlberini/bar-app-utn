import Papa from "papaparse";

const parseCSVData = async (data) => {
  return new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
};

const api = {
  users: {
    list: async () => {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnhIESvbbFOPNe8ePLPmY6O3nlRVHRG_sDHhBc3YvWU2hLTyYGoRTkxm9ityLK-ckQhk_bxVm9gLko/pub?gid=1871984993&output=csv"
      );
      const data = await response.text();
      const parsedData = await parseCSVData(data);
      return parsedData;
    },
  },

  links: {
    fetch: async (url) => {
      const response = await fetch(url);
      const data = await response.text();
      const parsedData = await parseCSVData(data);
      return parsedData;
    },
  },
};

export { api };
