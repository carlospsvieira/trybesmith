import { getAllProducts, insertProduct } from '../models/products.model';

async function handleInsertProduct(name: string, amount: string) {
  const result = await insertProduct(name, amount);
  if (!result) {
    throw new Error('PRODUCT NOT AUTHORIZED');
  }
  return result;
}

async function handleAllProducts() {
  const result = await getAllProducts();
  if (!result) {
    throw new Error('PRODUCTS NOT FOUND');
  }
  return result;
}

export { handleAllProducts, handleInsertProduct };
