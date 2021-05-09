import { Brands } from './Brands'
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router-dom';
import BrandsItemSytles from './styles/BrandsItemStyles';
import { useHistory } from 'react-router-dom'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { BandsInitialState } from './BandsInitialState'
import { Loadding } from '../../components/Loading/Loadding';
import { Container } from '@material-ui/core';
import * as Service from '../../services/Services';
interface Props {
    brand: Brands
}

const initialState = BandsInitialState;
const useStyles = BrandsItemSytles;
interface Params {
    id: string
}
export const BrandsItem = () => {
    const [isFree, setfree] = React.useState(false);
    const isLogged = window.localStorage.getItem("isLogged");
    if (isLogged == 'false') window.location.href = '/login'

    const classes = useStyles();
    const params = useParams<Params>();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);
    const [brand, setBrands] = useState<Brands>(initialState);
    useEffect(() => {
        if (params.id) getIdBrands(params.id)
    }, [params.id]);
    const getIdBrands = async (idBrands: string) => {
        const res = await Service.getBrandsId(idBrands);
        const { id, Name, Logo, Active, createdAt, updateAt, DescriptionBrands } = res;
        const updateBrand = {
            id: res.id,
            Name: res.Name,
            Logo: res.Logo,
            Active: res.Active,
            createdAt: res.createdAt,
            updateAt: res.updateAt,
            DescriptionBrands: res.DescriptionBrands,
            webSupplier: res.webSupplier,
            barndssuppliern: res.barndssuppliern
        }
        setBrands(updateBrand);
        setfree(true)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    if (isLogged == 'true') {
        if (isFree) {
            return (
                <Container>
                    <Card className={classes.root}>
                        <CardContent className={classes.cardHeader}>
                            <IconButton aria-label="delete" onClick={() => history.goBack()} color="secondary"> <KeyboardReturnIcon /></IconButton>
                            <Typography>DETALLE DE LA MARCA</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography component="h1" variant="h5" className={classes.title}>
                                {brand.Name}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <img src={brand.Logo} alt="" className={classes.media} />
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography paragraph><em>   <b>Descripcion:</b>    {brand.DescriptionBrands}</em></Typography>
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
                                    <b>Web</b> : {brand.webSupplier}
                                </Typography>
                                <Typography>
                                    <b>Provedor :</b>  {brand.barndssuppliern}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Container>
            );
        } else {
            return (
                <Loadding />
            )
        }
    } else {
        return (
            <Loadding />
        )
    }
}


