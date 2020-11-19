import React from 'react';

const Dashboard = props => 
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>

export default Dashboard;
