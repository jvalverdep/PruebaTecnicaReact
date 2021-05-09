import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { TextField, Button, Grid, CssBaseline, Typography, CardContent, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core';
import { Products } from './Products'
import { toast } from 'react-toastify';
import { useHistory, useParams, } from 'react-router-dom'
import * as ProductService from '../../services/Services';
import ImageUploading, { ImageListType } from "react-images-uploading";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ProductFormSytles from './styles/ProductFormSytles'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Brands } from '../Brands/Brands';
import { BandsInitialState } from '../Brands/BandsInitialState'
import { Loadding } from '../../components/Loading/Loadding';
type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
interface Params {
    id: string
}
const useStyles = ProductFormSytles;

export const ProductForm = () => {
    const [isFree, setfree] = React.useState(false);
    const isLogged = window.localStorage.getItem("isLogged");
    if (isLogged == 'false') window.location.href = '/login'

    const history = useHistory();
    const params = useParams<Params>();
    const classes = useStyles();
    const maxNumber = 69;

    const initialState = {
        id: "",
        Name: "",
        imgProduct: "",
        descriptionProduct: "",
        priceProduct: "",
        category_id: "",
        brands: "",
        mark_id: "",
        countProduct: "",
        gender: "",
        sku: "",
        material: "",
        discount: "",
        Active: ""
    };
    const [images, setImages] = React.useState([]);
    const [product, setProduct] = useState<Products>(initialState);
    const [brands, setBrands] = useState<Brands[]>([]);
    useEffect(() => {
        bransAvailable()
        if (params.id) getIdProduct(params.id)
    }, [params.id]);
    const handleInputChange = (e: InputChange) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    const handleSelectChange = (e: any) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(product);
        if (!params.id) {
            const res = await ProductService.createProduct(product);
            toast.success("Se ha guardado con exito la Marca");
            history.push('/products');
        }
        else {
            const res = await ProductService.UpdateProduct(product);
            toast.success("Se ha actualizado con exito la Marca");
            history.push('/products');
        }
    }
    const getIdProduct = async (idProduct: string) => {
        const res = await ProductService.getProductId(idProduct);
   
        const updateProduct = {
            id: res.id,
            Name: res.Name,
            imgProduct: res.imgProduct,
            descriptionProduct: res.descriptionProduct,
            priceProduct: res.priceProduct,
            category_id: res.category_id,
            brands: res.brands,
            mark_id: res.mark_id,
            countProduct: res.countProduct,
            gender: res.gender,
            sku: res.sku,
            material: res.material,
            discount: res.discount,
            Active: res.Active
        }
        setProduct(updateProduct);
        setfree(true);
    }

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        console.log(imageList)
        setProduct({ ...product, imgProduct: imageList[0].dataURL });
        setImages(imageList as never[]);
    };
    const bransAvailable = async () => {
        const res = await ProductService.getBrands();
        res.status ==200? setBrands(res.data) : window.location.href = '/login';
        setfree(true);
    }
    if (isLogged == 'true') {
        if(isFree){
            return (
                <Container component="main" className={classes.container}>
                    <IconButton aria-label="delete" onClick={() => history.goBack()} color="secondary"> <KeyboardReturnIcon /></IconButton>
                    <Grid container spacing={1} xs={12}>
                        <CssBaseline />
                        <div className={classes.paper}>
                        { params.id ? 
                            <Typography component="h1" variant="h5">   Actualizar Producto </Typography>
                            :
                            <Typography component="h1" variant="h5">   Crear Producto </Typography>
                        
                        }
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            className={classes.inputNumber}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            required
                                            id="name"
                                            label="Nombre del Producto"
                                            name="Name"
                                            onChange={handleInputChange}
                                            value={product.Name}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            className={classes.inputNumber}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            required
                                            id="sku"
                                            label="SKU"
                                            name="sku"
                                            onChange={handleInputChange}
                                            value={product.sku}
                                        />
                                    </Grid>
                                </Grid>
    
                                <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="brands">Marca</InputLabel>
                                        <Select
                                            labelId="brands"
                                            id="brands"
                                            name="brands"
                                            label="Marca"
                                            onChange={handleSelectChange}
                                            value={product.brands}
                                        >
                                            {
                                                brands.map((brand, index) => (
                                                    <MenuItem key={brand.id} value={brand.Name}>{brand.Name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="category_id">Categoria</InputLabel>
                                        <Select
                                            labelId="category_id"
                                            id="category_id"
                                            label="Categoria"
                                            value={product.category_id}
                                            name="category_id"
                                            onChange={handleSelectChange}
                                        >
                                            <MenuItem value="Sandalias">Sandalias</MenuItem>
                                            <MenuItem value="Deportivo">Deportivo</MenuItem>
                                            <MenuItem value="Botas">Botas</MenuItem>
                                            <MenuItem value="Zapatillas de moda">Zapatillas de moda</MenuItem>
                                            <MenuItem value="Mocasines">Mocasines</MenuItem>
                                            <MenuItem value="Pantuflas">Pantuflas</MenuItem>
                                            <MenuItem value="Zuecos">Zuecos</MenuItem>
    
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="gender">Genero</InputLabel>
                                        <Select
                                            labelId="gender"
                                            id="gender"
                                            name="gender"
                                            label="Genero"
                                            onChange={handleSelectChange}
                                            value={product.gender}
                                        >
                                            <MenuItem value="Hombre">Hombre</MenuItem>
                                            <MenuItem value="Mujer">Mujer</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="gender">Material</InputLabel>
                                        <Select
                                            labelId="material"
                                            id="material"
                                            name="material"
                                            label="Material"
                                            onChange={handleSelectChange}
                                            value={product.material}
                                        >
                                            <MenuItem value="Sintetico">Sintetico</MenuItem>
                                            <MenuItem value="Elastico labrado">Elastico labrado</MenuItem>
                                            <MenuItem value="Gamuza">Gamuza</MenuItem>
                                            <MenuItem value="Sintetico-textil">Sintetico-textil</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.inputNumber}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="priceProduct"
                                        label="Precio Unitario"
                                        name="priceProduct"
                                        onChange={handleInputChange}
                                        value={product.priceProduct}
                                        type="number"
                                    />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            className={classes.inputNumber}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="countProduct"
                                            label="Cantidad disponible en almacen"
                                            name="countProduct"
                                            onChange={handleInputChange}
                                            value={product.countProduct}
                                            type="number"
                                        />
                                    </Grid>
                                   
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.inputTextArea}
                                        id="descriptionProduct"
                                        label="Descripcion"
                                        name="descriptionProduct"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        onChange={handleInputChange}
                                        value={product.descriptionProduct}
                                        variant="outlined"
                                    />
                                </Grid>
                      
                                    <Grid container >
                                        <ImageUploading
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber}
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageUpdate,
                                                onImageRemove,
                                                isDragging,
                                                dragProps
                                            }) => (
                                                <div className={classes.imgProduct}>
                                                    <Typography component="h2" variant="h5">
                                                        Foto del Producto
                                                    </Typography>
                                                    <input
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        type="subtmit"
                                                        onClick={onImageUpload}
                                                        style={isDragging ? { color: "red" } : undefined}
                                                        {...dragProps}
                                                        name="Logo"
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                    {
                                                        product.imgProduct == "" ?
                                                            imageList.map((image, index) => (
                                                                <div key={index}>
                                                                    <img src={image.dataURL} alt="" className={classes.imgProduct} />
                                                                </div>
                                                            ))
                                                            :
                                                            <div >
                                                                <img src={product.imgProduct} alt="" className={classes.imgProduct} />
                                                            </div>
                                                    }
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </Grid>
                               
                              
                                    {params.id ?
                                        <Button variant="contained" color="primary" type="submit" className={classes.button}> Actualizar </Button>
                                        : <Button variant="contained" color="primary" type="submit" className={classes.button}> Crear </Button>
                                    }
                               
                            </form>
                        </div>
    
                    </Grid>
                </Container>
            )
        }else{
            return (
                <Loadding />
            )
        }
    }
    else {
        return (
            <Loadding />
        )
    }
}


