import { Grid } from '@material-ui/core';
import React from 'react';
import Form from '../../layouts/Form';
import {Input, Select, Button} from '../../controls';

export default function OrderForm() {
    const pMethod = [
        {id : 1, title: "Cash"},
        {id : 2, title: "Card"},
    ]
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        disabled
                        label="Order Number"
                        name="orderNumber">
                    </Input>
                    <Select
                        label="Customer"
                        name="customerId"
                        options={[
                            { id: 1, title: 'dungnm' },
                            { id: 2, title: 'dungnm1' },
                            { id: 3, title: 'dungnm2' }
                        ]}/>
                </Grid>
                <Grid item xs={6}>
                    <Input
                        disabled
                        label="Grand Total"
                        name="gTotal">
                    </Input>
                    <Select
                        label="Pay Method"
                        name="pMethod"
                        options={pMethod}/>
                </Grid>
            </Grid>
        </Form>
    )
};