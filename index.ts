import { apiClient } from './api-client';

let loading: boolean = false;

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Resource: carts?limit=3
const fetchCarts = () => {};

// Resource: products/{id}
const fetchProduct = (id: string) => {
  if (Math.random() > 0.8) throw new Error('Network error');
};

// Resource: users/{id}
const fetchUser = (id: string) => {};

// 1. Recuperare i carrelli (carts)

// 2. Ricostruire il carrello recuperando 'userId' e 'productId' per ogni carrello

// 3. Gestire correttamente il loading

// 4. Gestire correttamente gli errori visualizzando un alert

// 5. Creare un array con top 3 prodotti più comprati
