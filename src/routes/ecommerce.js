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
      },
      {
        path: "/ecommerce/products",
        name: "Products",
        component: AsyncEcommerceAllProducts
      },
      {
        path: "/ecommerce/checkout",
        name: "Checkout",
        component: AsyncEcommerceCheckout
      },
      {
        path: "/ecommerce/customers",
        name: "Customers",
        component: AsyncEcommerceCustomers
      },
      {
        path: "/ecommerce/order-detail",
        name: "OrderDetail",
        component: AsyncEcommerceOrderDetail
      },
      {
        path: "/ecommerce/orders",
        name: "Orders",
        component: AsyncEcommerceOrders
      },
      {
        path: "/ecommerce/product-detail",
        name: "ProductDetail",
        component: AsyncEcommerceProductDetail
      },
      {
        path: "/ecommerce/shopping-cart",
        name: "ShoppingCart",
        component: AsyncEcommerceShoppingCart
      },
    ]
};

export default ecommerceRoutes;