import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Product } from '../../../types/Product';

type ProductDetailsProps = {
  id: number;
  onBack: () => void;
};

const fetchProduct = (id: number) => {
  return axios.get(`http://localhost:3333/products/${id}`).then((response) => {
    return response.data;
  });
};

function ProductDetail({ id, onBack }: ProductDetailsProps) {
  const { data: product, isLoading } = useQuery<Product>(
    [`products${id}`],
    () => fetchProduct(id)
  );

  // const [product, setProduct] = useState<Product>();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchProduct(id)
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <a href="#" onClick={() => onBack()}>
        Voltar a lista de produtos
      </a>

      <div className="row">
        <label htmlFor="">ID:</label>
        {product?.id}
      </div>
      <div className="row">
        <label htmlFor="">Name:</label>
        {product?.name}
      </div>
      <div className="row">
        <label htmlFor="">Price:</label>
        {product?.price}
      </div>
      <div className="row">
        <label htmlFor="">Description:</label>
        {product?.description}
      </div>
      <div className="row">
        <label htmlFor="">Image:</label>
        <img src={product?.image} />
      </div>
    </div>
  );
}

export default ProductDetail;
