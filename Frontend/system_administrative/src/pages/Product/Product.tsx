import * as React from "react"
import {TextField, Paper, Grid,  Button,   MenuItem,  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Products} from './Products'
import ProductStateInitial from './ProductStateInitial'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
  }));
type Forelement = React.FormEvent<HTMLFormElement>;

export const Product: React.FC = () => {
const classes = useStyles();
const [category, setCategory] = React.useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    //setCategory(category);
  };

const [newProduct, setNewProduct] = React.useState<string>('');
const [products, setProducts] = React.useState<Products[]>([]);

const handleSubmit =(e:Forelement) =>{
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct('');
}
// img:string, price:string, category_id:number,mark_id:number , count:number,active:boolean
const addProduct = (name:string) =>{
const newproducts = [...products,ProductStateInitial];
 //setProducts(newproducts);
}
  
 return (
          <>
          
         <form onSubmit={handleSubmit} noValidate>

          </form>
        </>
   
  );
}