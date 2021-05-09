import * as React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import * as Service from '../../services/Services';
import { ArgumentAxis, ValueAxis, BarSeries, Chart, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import { Container, Grid, Typography } from '@material-ui/core';
import HomeStyles from './styles/HomeStyles'
import { Loadding } from '../../components/Loading/Loadding';

const useStyles = HomeStyles;
export const Home = () => {
    const [isFree, setfree] = React.useState(false);
    const isLogged = window.localStorage.getItem("isLogged");
    if (isLogged == 'false') window.location.href = '/login'
    const [product, setProduct] = useState<any>([]);
    const classes = useStyles();

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const productBar = await Service.getProductOfBrands();
        setProduct(productBar.data[0]);
        setfree(true);
    }
    const chartData: any = product;

    if (isLogged == 'true') {
        if (isFree) {
            return (
                <Container >
                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Typography variant="h4" className={classes.title}>
                            Sistema de Almacenes TABOLU
                        </Typography>
                        <Grid item xs={12}>
                            <Paper>
                                <Chart data={chartData}>
                                    <ValueScale name="cantidad" />
                                    <ArgumentAxis />
                                    <ValueAxis scaleName="cantidad" showGrid={true} showLine={true} showTicks={true} />
                                    <BarSeries
                                        name="Units Sold"
                                        valueField="cantidad"
                                        argumentField="marca"
                                        scaleName="cantidad"
                                    />
                                    <EventTracker />
                                    <Tooltip />
                                </Chart>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            )
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


