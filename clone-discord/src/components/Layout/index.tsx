import React from 'react';
import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
        </Grid>
    )
};

export default Layout;