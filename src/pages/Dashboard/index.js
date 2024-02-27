import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import Routes from './Routes'
import {items} from './SidebarItems/SidebarItems'

const { Header, Sider } = Layout;

export default function Index() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout style={{ minHeight: '110vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#1D1D1D', color: '#fff' }} >
                    <div className="demo-logo-vertical" />
                    <Menu theme='dark' style={{ backgroundColor: '#1D1D1D', color: '#fff' }} mode="inline" defaultSelectedKeys={['2']} items={items} />
                </Sider>
                <Layout >
                    <Header style={{ padding: 0, background: '#252525', }} className='d-flex align-items-center' >
                        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, color: 'white' }} />
                        <h2 className='text-white text-2xl'>Textile Management System</h2>
                    </Header>
                    <Routes />
                </Layout>
            </Layout >

        </>
    );
};
