import Product from "../product/Product"

const Products = ({ products }) => {


    return (
        <div>
            {products.map((product, index) => (
                <Product name={product} index={index} />

            ))}
        </div>
    );
};

export default Products