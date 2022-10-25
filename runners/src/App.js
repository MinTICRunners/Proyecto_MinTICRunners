import './App.css';
import Carrito from './components/cliente/Carrito'
import Ventas from './components/admin/Ventas'
import ListaProducto from './components/cliente/listproducts'
import NuevoProducto from './components/admin/NuevoProducto'


function App() {
  return (
    <div className ="App">
        <Carrito/>
        <Ventas/>
        <ListaProducto/>
        <NuevoProducto/>
    </div>
  );
}


export default App;