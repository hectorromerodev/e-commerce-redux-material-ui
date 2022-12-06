import Product from '../Product.interface';

export default interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
