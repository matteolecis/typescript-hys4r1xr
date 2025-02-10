import { apiClient } from './api-client';

let loading: boolean = false;

const params = {limit: 3};

// Resource: carts?limit=3&skip=2
const fetchCarts = (params: {limit?: number, skip?: number}) => {
  const formattedParams = Object.entries(params)
  .reduce<Record<string, string>>((acc, [k,v]) => {
   return v !== undefined ? {...acc, [k]:v.toString()} : acc;
  }, {})
  const queryParams = new URLSearchParams(formattedParams)
  const queryParamsString = queryParams.toString();
  return apiClient.get("carts?" + queryParamsString);
};

const arrayOfCarts = fetchCarts(params);

// Resource: products/{id}
const fetchProduct = (id: string) => {
  if (Math.random() > 0.8) 
    throw new Error('Network error');
  return apiClient.get(`products/${id}`)
};

 

// Resource: users/{id}
const fetchUser = (id: string) => {
  return apiClient.get(`users/${id}`)
};

console.log(2);

// 1. Recuperare i carrelli (carts)

// 2. Ricostruire il carrello recuperando 'userId' e 'productId' per ogni carrello


// 3. Gestire correttamente il loading

// 4. Gestire correttamente gli errori visualizzando un alert

// 5. Creare un array con top 3 prodotti più comprati



