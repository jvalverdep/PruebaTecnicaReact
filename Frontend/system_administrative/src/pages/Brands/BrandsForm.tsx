import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { TextField, Button, Grid, Container, CssBaseline, Typography } from '@material-ui/core';
import { Brands } from './Brands'
import { toast } from 'react-toastify';
import { useHistory, useParams, } from 'react-router-dom'
import ImageUploading, { ImageListType } from "react-images-uploading";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import BrandsFormSytles from './styles/BrandsFormSytles'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Loadding } from '../../components/Loading/Loadding';
import * as Service from '../../services/Services';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params {
    id: string
}
const useStyles = BrandsFormSytles;
export const BrandsForm = () => {
    const [isFree, setfree] = React.useState(false);
    const isLogged = window.localStorage.getItem("isLogged");
    if (isLogged === 'false') window.location.href = '/login'

    const history = useHistory();
    const params = useParams<Params>();
    const classes = useStyles();
    const maxNumber = 69;
    const initialState = {
        id: "",
        Name: "",
        Logo: "",
        Active: false,
        createdAt: "",
        updateAt: "",
        DescriptionBrands: "",
        webSupplier: "",
        barndssuppliern: ""
    };
    const [images, setImages] = React.useState([]);
    const [brand, setBrands] = useState<Brands>(initialState);

    useEffect(() => {
        if (params.id) getIdBrands(params.id)
        else setfree(true)
    }, [params.id]);
    const handleInputChange = (e: InputChange) => {
        setBrands({ ...brand, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!params.id) {
            const res = await Service.createBrands(brand);
            console.log(res)
            toast.success("Se ha guardado con exito la Marca");
            history.push('/brands');
        }
        else {
            await Service.UpdateBrands(brand);
            toast.success("Se ha actualizado con exito la Marca");
            history.push('/brands');
        }
    }
    const getIdBrands = async (idBrands: string) => {
        const res = await Service.getBrandsId(idBrands);
        const updateBrand = {
            id: res.id,
            Name: res.Name,
            Logo: res.Logo,
            Active: res.Active,
            createdAt: res.createdAt,
            updateAt: res.updateAt,
            DescriptionBrands: res.DescriptionBrands,
            barndssuppliern: res.barndssuppliern,
            webSupplier: res.webSupplier
        }
        setBrands(updateBrand);
        setfree(true)
    }
    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        setBrands({ ...brand, Logo: imageList[0].dataURL });
        setImages(imageList as never[]);
    };
    if (isLogged === 'true') {
        if (isFree) {
            return (
                <Container component="main" maxWidth="xs" className={classes.container}>
                    <IconButton aria-label="delete" onClick={() => history.goBack()} color="secondary"> <KeyboardReturnIcon /></IconButton>
                    <CssBaseline />
                    <div className={classes.paper}>
                        {params.id ?
                            <Typography component="h1" variant="h5">  Actualizar Marca </Typography>
                            : <Typography component="h1" variant="h5">  Crear Marca </Typography>
                        }
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="name"
                                    label="Nombre de la Marca"
                                    name="Name"
                                    onChange={handleInputChange}
                                    value={brand.Name}
                                />
                            </div>
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="web"
                                    label="Web"
                                    name="webSupplier"
                                    onChange={handleInputChange}
                                    value={brand.webSupplier}
                                />
                            </div>
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="supplier"
                                    label="Proveedor"
                                    name="barndssuppliern"
                                    onChange={handleInputChange}
                                    value={brand.barndssuppliern}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="DescriptionBrands"
                                    label="Descripcion"
                                    name="DescriptionBrands"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    onChange={handleInputChange}
                                    value={brand.DescriptionBrands}
                                    variant="outlined"
                                />
                            </div>
                            <div>
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
                                            <div className={classes.imgBrands}>
                                                <Typography component="h2" variant="h5">
                                                    Logotipo
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
                                                    brand.Logo == "" ?
                                                        imageList.map((image, index) => (
                                                            <div key={index}>
                                                                <img src={image.dataURL} alt="" className={classes.imgBrands} />
                                                            </div>
                                                        ))
                                                        :
                                                        <div >
                                                            <img src={brand.Logo} alt="" className={classes.imgBrands} />
                                                        </div>
                                                }
                                            </div>
                                        )}
                                    </ImageUploading>
                                </Grid>
                            </div>
                            {params.id ?
                                <Button variant="contained" color="primary" type="submit" className={classes.button}> Actualizar </Button>
                                : <Button variant="contained" color="primary" type="submit" className={classes.button}> Crear </Button>
                            }
                        </form>
                    </div>

                </Container>
            )
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


