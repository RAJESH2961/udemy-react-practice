
import { useParams } from "react-router-dom";
function ProductDetailPage() {
    // useParams return s an object with { productId : data reaf from url}
    // Product id the placeholder name declared when path is defining in App.js
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