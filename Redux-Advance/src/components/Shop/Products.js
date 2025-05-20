import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', title: 'Apple iPhone 14 Pro', price: 999, description: '6.1‑inch display with A16 Bionic chip and Pro camera system.' },
  { id: 'p2', title: 'Samsung Galaxy S23 Ultra', price: 1199, description: 'High-resolution camera, Snapdragon 8 Gen 2, 120Hz display.' },
  { id: 'p3', title: 'Sony WH-1000XM5 Headphones', price: 399, description: 'Industry-leading noise cancellation with premium sound quality.' },
  { id: 'p4', title: 'Apple MacBook Air M2', price: 1099, description: 'Supercharged by M2 chip, fanless design, and 18-hour battery life.' },
  { id: 'p5', title: 'Dell XPS 13', price: 999, description: 'Compact and powerful Windows laptop with Intel i7 and OLED display.' },
  { id: 'p6', title: 'Logitech MX Master 3S', price: 99, description: 'Advanced ergonomic mouse with ultra-fast scrolling and USB-C charging.' },
  { id: 'p7', title: 'Google Pixel 7 Pro', price: 899, description: 'Tensor G2 chip with the best of Google’s AI and an amazing camera.' },
  { id: 'p8', title: 'Bose QuietComfort Earbuds II', price: 279, description: 'Premium wireless earbuds with customizable noise cancellation.' },
  { id: 'p9', title: 'Samsung 49" Odyssey G9 Monitor', price: 1399, description: 'Ultra-wide gaming monitor with 240Hz refresh rate and QHD resolution.' },
  { id: 'p10', title: 'Apple Watch Series 9', price: 399, description: 'Powerful new features like Double Tap and advanced health tracking.' },
  { id: 'p11', title: 'Amazon Kindle Paperwhite', price: 129, description: 'Waterproof e-reader with 300ppi glare-free display and long battery life.' },
  { id: 'p12', title: 'GoPro HERO11 Black', price: 499, description: 'Action camera with 5.3K video, improved stabilization, and night effects.' },
  { id: 'p13', title: 'Sony PlayStation 5', price: 499, description: 'Next-gen gaming console with fast SSD and haptic feedback controller.' },
  { id: 'p14', title: 'Xbox Series X', price: 499, description: 'Powerful console with 4K gaming support and Game Pass integration.' },
  { id: 'p15', title: 'Razer Blade 15', price: 1899, description: 'High-performance gaming laptop with RTX 3070 and 360Hz screen.' },
  { id: 'p16', title: 'Anker PowerCore 10000', price: 25, description: 'Ultra-compact portable charger with fast-charging technology.' },
  { id: 'p17', title: 'Fitbit Charge 6', price: 159, description: 'Fitness tracker with built-in GPS, heart rate monitor, and NFC payments.' },
  { id: 'p18', title: 'Canon EOS R50', price: 679, description: 'Compact mirrorless camera with 24.2MP and 4K video recording.' },
  { id: 'p19', title: 'Nikon Z6 II', price: 1599, description: 'Full-frame mirrorless camera with dual processors and 4K video.' },
  { id: 'p20', title: 'DJI Mini 4 Pro Drone', price: 799, description: 'Lightweight drone with 4K video, obstacle sensing, and 34 min flight time.' },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
