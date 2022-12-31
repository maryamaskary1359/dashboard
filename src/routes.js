
import Home from "./Pages/Home/Home";
import UserList from "./Pages/Users/UserList";
import Products from "./Pages/Products/Products";
import NewUsers from "./Pages/NewUserss/NewUsers";
import FormRegisrer from "./Pages/form/Form";
import Product from './Pages/product/Product'
let routes=[
    {path:'/',element:<Home/>},
    {path:'/userList',element:<UserList/>},
    {path:'/products',element:<Products/>},
    {path:'/newUsers',element:<NewUsers/>},
    {path:'/form',element:<FormRegisrer/>},
    {path:'/products/:productID',element:<Product/>},
]

export default routes
