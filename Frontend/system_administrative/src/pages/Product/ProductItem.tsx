import { Products } from './Products'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router-dom';
import ProductItemSytles from './styles/ProductItemStyles';
import * as ProductService from '../../services/Services';
import { useHistory } from 'react-router-dom'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Loadding } from '../../components/Loading/Loadding';
import { Container } from '@material-ui/core';

interface Props {
    product: Products
}

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
const useStyles = ProductItemSytles;
interface Params {
    id: string
}

export const ProductItem = () => {
    const [isFree, setfree] = React.useState(false);
    const isLogged = window.localStorage.getItem("isLogged");
    if (isLogged == 'false') window.location.href = '/login'
    const classes = useStyles();
    const params = useParams<Params>();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);
    const [product, setProduct] = useState<Products>(initialState);

    useEffect(() => {
        if (params.id) getIdProduct(params.id)
    }, [params.id]);
    const getIdProduct = async (idproducts: string) => {
        const res = await ProductService.getProductId(idproducts);
        // const { id, Name, imgProduct,  descriptionProduct,priceProduct  } = res;
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
        setfree(true)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    if (isLogged == 'true') {
        if(isFree){
            return (
                <Container>
                    <Card className={classes.root}>
                        <CardContent className={classes.cardHeader}>
                            <IconButton aria-label="delete" onClick={() => history.goBack()} color="secondary"> <KeyboardReturnIcon /></IconButton>
                            <Typography>DETALLE DE PRODUCTO</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography component="h1" variant="h5" className={classes.title}>
                                {product.Name}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <img src={product.imgProduct} alt="" className={classes.media} />
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography paragraph><em><b>Descripcion: </b>{product.descriptionProduct}</em></Typography>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
    
                                <Typography>
                                    <b>Precio:</b> {product.priceProduct}
                                </Typography>
                                <Typography>
                                   <b> Cantidad:</b> {product.countProduct}
                                </Typography>
                                <Typography>
                                  <b> Marca: </b> {product.brands}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Container>
            );
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


