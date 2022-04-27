import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Product } from '../../../types/Product';

type ProductDetailsProps = {
  onProductDetail: (id: number) => void;
};

const fetchProducts = () => {
  return axios.get(`http://localhost:3333/products`).then((response) => {
    return response.data;
  });
};

function ProductList({ onProductDetail }: ProductDetailsProps) {
  const { data: products, isLoading } = useQuery<Product[]>(['products'], () =>
    fetchProducts()
  );

  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchProducts()
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading || !products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Products List</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <a
                  href="#"
                  onClick={() => {
                    onProductDetail(product.id);
                  }}
                >
                  Detail
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
