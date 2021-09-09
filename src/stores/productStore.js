// mobx
import { makeAutoObservable } from 'mobx';

// axios
import instance from './instance';

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // fetch all products
  fetchProducts = async () => {
    try {
      const resppnse = await instance.get('/products');
      this.products = resppnse.data;
      this.loading = false;
    } catch (error) {
      console.error('Error in Fetching Products', error);
    }
  };

  // fetch on product
  getProductById = (productId) => {
    this.products.find((product) => product._id === productId);
  };

  // craete new product
  createProduct = async (newProduct) => {
    console.log(newProduct);
    try {
      // creating form data to send the request
      const formData = new FormData();

      for (const key in newProduct) formData.append(key, newProduct[key]);

      console.log(formData);

      const response = await instance.post('/products', formData);

      this.products.push(response.data);
    } catch (error) {
      console.error('Error in Creating New Product');
    }
  };

  // update product
  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();

      for (const key in updatedProduct) {
        formData.append(key, updatedProduct[key]);
      }

      const response = await instance.put(
        `/products/${updatedProduct.id}`,
        formData
      );

      const product = this.products.find(
        (product) => product._id === updatedProduct._id
      );

      for (const key in product) product[key] = response.data[key];
    } catch (error) {
      console.error('Error in Updating Product', error);
    }
  };

  // delete product
  deleteProduct = async (productId) => {
    try {
      await instance.delete(`/products/${productId}`);
      let filteredProduct = this.products.filter(
        (product) => product._id !== productId
      );
      this.products = filteredProduct;
    } catch (error) {
      console.error('Error in Deleting Product');
    }
  };
}

const productStore = new ProductStore();
// fetching all data
productStore.fetchProducts();
// exporting
export default productStore;
