const BASE_URL = 'https://fakestoreapi.com';

export const apiClient = {
  get: async (resource: string) => {
    try{
      const response: Response = await fetch(`${BASE_URL}/${resource}`);
      return await response.json();
    } catch(err) {
      alert(err);
    }
  },
};
