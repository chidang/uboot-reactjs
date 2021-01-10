import AsyncComponent from '../components/AsyncComponent';
const AsyncEcommerceAddProduct = AsyncComponent(() => import('../containers/Ecommerce/AddProduct'));
const AsyncEcommerceAllProducts = AsyncComponent(() => import('../containers/Ecommerce/AllProducts'));
const AsyncEcommerceCheckout = AsyncComponent(() => import('../containers/Ecommerce/Checkout'));
const AsyncEcommerceCustomers = AsyncComponent(() => import('../containers/Ecommerce/Customers'));
const AsyncEcommerceOrderDetail = AsyncComponent(() => import('../containers/Ecommerce/OrderDetail'));
const AsyncEcommerceOrders = AsyncComponent(() => import('../containers/Ecommerce/Orders'));
const AsyncEcommerceProductDetail = AsyncComponent(() => import('../containers/Ecommerce/ProductDetail'));
const AsyncEcommerceShoppingCart = AsyncComponent(() => import('../containers/Ecommerce/ShoppingCart'));

const ecommerceRoutes = {
    path: "/ecommerce",
    name: "Ecommerce",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
    children: [
      {
        path: "/ecommerce/add-product",
        name: "AddProduct",
        component: AsyncEcommerceAddProduct
      }
    ]
};

export default ecommerceRoutes;
