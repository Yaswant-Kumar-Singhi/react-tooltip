import {Layout , Menu , Breadcrumb} from 'antd'
import Home from '../pages/Home'



const Layout = ({Header , Content , Footer}) => {

    return(

        <Layout>
            <Header>
                <Menu>
                    <Menu.Item key="1" >Home</Menu.Item>
                </Menu>
            </Header>
           
            <Footer>
                <p>as</p>
            </Footer>
        </Layout>

    );
}

export default Layout;