import axios from 'axios'
import { Products } from '../pages/Product/Products';
import { ProductsBrands } from '../pages/Product/ProductsBrands';
import { toast } from 'react-toastify';
import { Brands } from '../pages/Brands/Brands';

const API = 'http://localhost:3030';
const headersAuth = {
    'Authorization': `Bearer  ${window.localStorage.getItem("token")}`,
    'Content-Type': 'application/json'
}
export const getProduct = async () => {
    return await axios.get<Products[]>(`${API}/Product`, {
        headers: headersAuth
    });
}
export const getProductOfBrands = async () => {
    return await axios.get<ProductsBrands[]>(`${API}/Product/procedure`, {
        headers: headersAuth
    });
}
export const getBrands = async () => {
    const res= await axios.get<Brands[]>(`${API}/Trademark`, {
        headers: headersAuth
    });
    if(res.status == 400) window.location.href = '/login';
    return res;
}
export const createBrands = async (brand: Brands) => {
   const brandRes=   await axios.post(`${API}/Trademark`,
        brand, { headers: headersAuth }
    );
    if(brandRes.status == 400) window.location.href = '/login';
    return brandRes;
}
export const getBrandsId = async (id: string) => {
    const brands = await axios.get<Brands[]>(`${API}/Trademark?id=${id}`, { headers: headersAuth });
    if(brands.status == 400) window.location.href = '/login';
    return brands.data[0];
}
export const UpdateBrands = async (brand: Brands) => {
     
   const res= await axios.post(`${API}/Trademark`, brand, { headers: headersAuth });
   if(res.status == 400) window.location.href = '/login';
    return res;
}
export const getDeleteId = async (id: string) => {
    const brands = await axios.delete<Brands[]>(`${API}/Trademark/${id}`, { headers: headersAuth });
    if(brands.status == 400) window.location.href = '/login';
    return brands;
}
export const createProduct = async (product: Products) => {
    const res = await axios.post(`${API}/Product`,
        product, { headers: headersAuth }
    );
    if(res.status == 400) window.location.href = '/login';
    return res;

}
export const getProductId = async (id: string) => {
    const products = await axios.get<Products[]>(`${API}/Product?id=${id}`, { headers: headersAuth });
   if(products.status == 400) window.location.href = '/login';
    return products.data[0];
}
export const UpdateProduct = async (product: Products) => {
    return await axios.post(`${API}/Product`, product, { headers: headersAuth });
}
export const DeleteIdProducts = async (id: string) => {
    const products = await axios.delete<Products[]>(`${API}/Product/${id}`, { headers: headersAuth });
    if(products.status == 400) window.location.href = '/login';
    return products;
}