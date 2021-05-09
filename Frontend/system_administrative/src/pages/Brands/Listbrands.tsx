import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridApi, GridCellValue, GridColDef } from '@material-ui/data-grid';
import { Brands } from './Brands'
import listBrandsStyles from './styles/ListBrandsStyles'
import { Button, Card, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Loadding } from '../../components/Loading/Loadding';
import * as Service from '../../services/Services';
const useStyles = listBrandsStyles;

export const Listbrands = () => {
  const [isFree, setfree] = React.useState(false);
  const isLogged = window.localStorage.getItem("isLogged");
  if (isLogged == 'false') window.location.href = '/login'
  const history = useHistory();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'Name', headerName: 'Marca', width: 200 },
    { field: 'DescriptionBrands', headerName: 'Descripción', width: 250 },
    { field: 'webSupplier', headerName: 'Web', width: 240 },
    { field: 'barndssuppliern', headerName: 'Proveedor', width: 170 },
    {
      field: "",
      headerName: "Action",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onDelete = () => {
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
  const classes = useStyles();
  const [brands, setBrands] = useState<Brands[]>([]);
  const [rows, setRows] = React.useState<Brands[]>(brands);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (item: string) => {
    const dataEdit = JSON.parse(item);
    const res = await Service.getDeleteId(dataEdit.id);
    // setOpen(true);
    res.status == 200 ? setModalMessage("Eliminado con Exito") : setModalMessage("No se pudo procesar la solicitud")
    loadBrands();
  }
  const handleEdit = (item: string) => {
    const dataEdit = JSON.parse(item);
    history.push(`brands/${dataEdit.id}/edit`)
  }
  const handleDetail = (item: string) => {
    const dataDetail = JSON.parse(item);
    history.push(`brands/${dataDetail.id}/detail`)
  }
  const loadBrands = async () => {
    const res = await Service.getBrands();
    setBrands(res.data);
    setfree(true)
  }
  useEffect(() => {
    loadBrands();
  }, [])
  const handleAdd = (e: React.MouseEvent<Element, globalThis.MouseEvent>) => {
    window.location.href = '/brands/new';
  }
  if (isLogged == 'true') {
    if (isFree) {
      return (
        <>
          <Container className={classes.container}>
            <Grid container>
              <Typography variant="h4" className={classes.title}>
                Listado de marcas
              </Typography>
            </Grid>
            <Button variant="contained" className={classes.buttonCreateBrands} onClick={handleAdd}> Agregar Nueva Marca </Button>
            <DataGrid rows={brands} columns={columns} pageSize={10}  />
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
  } else {
    return (
      <Loadding />
    )
  }

}