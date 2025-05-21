
import { useParams } from "react-router-dom";
function ProductDetailPage() {

    const params = useParams();
    return (
        <>
        <h1>Product Details</h1>
        {/* //it will get the id which is passed in url */}
        <p>{params.productId}</p>
        </>
    )
}

export default ProductDetailPage;