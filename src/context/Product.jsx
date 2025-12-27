import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState([]);

    const fetchProducts = async()=>{
        try {
            const res = await fetch(`http://localhost:8080/products`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log("Error -", error );
            setProducts([]);
        }
    }

    const addProducts = async(formData) =>{
        try {
            const res = await fetch(`http://localhost:8080/products`,{
                method:"POST",
                body:formData
            });
        } catch (error) {
            console.log("Status:", error);
        }
        fetchProducts();        
    }

    const updateProduct = async(id,formData) =>{
        if (!id) return;
        try {
            const res = await fetch(`http://localhost:8080/products/${id}`,{
                method:"PUT",
                body:formData
            });
        } catch (error) {
            console.log("Status:", error);
        }
        fetchProducts();        
    }

    const getProductById = (id) => {
        return products.find(p=>p.id==id);
    }

    const removeProduct = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/products/${id}`,{
                method:"DELETE",
            });

        } catch (error) {
            console.log("Error - ",error);
        }
        fetchProducts();
    }

        useEffect(() => {
        fetchProducts();
        }, []);

    return(
        <ProductContext.Provider value={{products,addProducts,updateProduct,getProductById,removeProduct,fetchProducts}}>
        {children}
        </ProductContext.Provider>
    )
}

export const useProduct = ()=> useContext(ProductContext);
