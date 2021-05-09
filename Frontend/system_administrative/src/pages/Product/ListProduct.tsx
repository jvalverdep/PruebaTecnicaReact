import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridApi, GridCellValue, GridColDef } from '@material-ui/data-grid';

import * as ProductService from '../../services/Services';
import { Products } from './Products'
import listproductsStyles from './styles/ListProductStyles'
import { Button, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Loadding } from '../../components/Loading/Loadding';
;

const useStyles = listproductsStyles;

export const ListProduct = () => {
  const [isFree, setfree] = React.useState(false);
  const isLogged = window.localStorage.getItem("isLogged");
  if (isLogged == 'false') window.location.href = '/login'

  const history = useHistory();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'sku', headerName: 'SKU', width: 100 },
    { field: 'Name', headerName: 'Producto', width: 100 },
    { field: 'descriptionProduct', headerName: 'Descripción', width: 150 },
    { field: 'category_id', headerName: 'Categoria', width: 100 },
    { field: 'brands', headerName: 'Marca', width: 100 },
    { field: 'gender', headerName: 'Genero', width: 100 },
    { field: 'material', headerName: 'Material', width: 100 },

    { field: 'countProduct', headerName: 'Cantidad', width: 100 },
    { field: 'priceProduct', headerName: 'Precio', width: 100 },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onDelete = () => {
          console.log('ff')
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: Record<string, GridCellValue> = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          handleDelete(JSON.stringify(thisRow, null, 4))
        };
        const onEdit = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: Record<string, GridCellValue> = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });

          handleEdit(JSON.stringify(thisRow, null, 4))
        };
        const onShow = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: Record<string, GridCellValue> = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          handleDetail(JSON.stringify(thisRow, null, 4))
        };
        return <>
          <IconButton aria-label="editar" onClick={onEdit} color="primary"> <BorderColorIcon /></IconButton>
          <IconButton aria-label="detalle" onClick={onShow} color="primary" > <OpenInNewIcon /></IconButton>
          <IconButton aria-label="delete" onClick={onDelete} color="secondary"> <DeleteIcon /></IconButton>
        </>
      }
    }
  ];
  const [open, setOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState<string>("");
  const [brands, setproducts] = useState<Products[]>([]);
  const [rows, setRows] = React.useState<Products[]>(brands);

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (item: string) => {
    const dataEdit = JSON.parse(item);
    const res = await ProductService.DeleteIdProducts(dataEdit.id);
    console.log(res)
    setOpen(true);
    res.status == 200 ? setModalMessage("Eliminado con Exito") : setModalMessage("No se pudo procesar la solicitud")
    loadproducts();
  }
  const handleEdit = (item: string) => {
    const dataEdit = JSON.parse(item);
    history.push(`products/${dataEdit.id}/edit`)
  }
  const handleDetail = (item: string) => {
    const dataDetail = JSON.parse(item);
    history.push(`products/${dataDetail.id}/detail`)
  }
  const loadproducts = async () => {
    const res = await ProductService.getProduct();
    setproducts(res.data);
    setfree(true)
  }
  useEffect(() => {
    loadproducts();
  }, [])
  const handleAdd = (e: React.MouseEvent<Element, globalThis.MouseEvent>) => {
    window.location.href = '/products/new';
  }
  if (isLogged == 'true') {
    if (isFree) {
      return (
        <>
          <Container className={classes.container}>
            <Grid container>
              <Typography variant="h4" className={classes.title}>
                Listado de productos
              </Typography>
            </Grid>
            <Button variant="contained" className={classes.buttonCreateProducts} onClick={handleAdd}> Agregar Nuevo Producto </Button>
            <DataGrid rows={brands} columns={columns} pageSize={10}  className={classes.gridTable} />
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" >
                Informacion
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  {modalMessage}
                </Typography>
              </DialogContent>
              <DialogActions>
              </DialogActions>
            </Dialog>
          </Container>
        </>
      );
    } else {
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