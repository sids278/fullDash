import React from 'react';
import { Layout, Space } from 'antd';
import Grid from './logs';
import Card from 'antd/es/card/Card';
import SideMenu from './SiderMenu';
import LineChart from '../components/line';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const LayoutFile: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%'  }} size={[0, 48]}>
   
    <Layout>
      {/* <Header style={{width:'50%',alignContent:'',color:'white'}}>Header</Header> */}
      <Layout>

       <LineChart/>
      </Layout>
      <Footer style={{backgroundColor:'whitesmoke'}}>Footer</Footer>
    </Layout>
    
   
  </Space>
);

export default LayoutFile;