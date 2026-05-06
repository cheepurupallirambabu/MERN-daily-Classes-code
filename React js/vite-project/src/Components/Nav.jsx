
import './Nav.css'

const Nav = ()=> {
    return (
        <>
           <nav>
            <ol style={ListStyle.orderList}>
                <li>Home</li>
                <li>Login</li>
                <li>Registr</li>
                <li>About</li>
                <li>Cart</li>
            </ol>
           </nav>
        </>
    )
}

const ListStyle = {
    orderList :{
     
    },

}
export default Nav;

