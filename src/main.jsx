import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/context.jsx'
import { ProductProvider } from './context/Product.jsx'

createRoot(document.getElementById('root')).render(
<ProductProvider>
    <CartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartProvider> 
</ProductProvider>   

)
