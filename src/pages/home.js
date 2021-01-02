import React, { Component } from 'react'
import {Tooltip} from 'react-tippy'
import {Link} from 'react-router-dom'
import 'react-tippy/dist/tippy.css'
import 'antd/dist/antd.css'
import TooltipMe from '../components/TooltipAssgn'
//import {} from '@tip'
import {Layout , Menu , Card, Button} from 'antd'
const {Header , Content , Footer  }  = Layout 


class Home extends Component {

    constructor (){
        super();
        this.state = {
        box: 'text',
        showTooltip: false,
        tooltipPosition: '',
         }
    }
    onHover = () => {
        this.setState({
          box: 'text',
          showTooltip: true,
        })
      }
      onLeave = () => {
        this.setState({
          box: 'text',
          showTooltip: false,
        })
      }

    handleChange = (event) => {
        this.setState({
          tooltipPosition: event.target.value
        })
      }
      render() {
        const { box, showTooltip, tooltipPosition} = this.state;

        return(
            <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}> 
                    <Menu.Item key="home"  >
                        <Link to="/">Home</Link>    
                    </Menu.Item>
                </Menu>
            </Header>
        
        <Content style ={{
            "padding" :"25px 50px",
            "min-height" : "550px"
        }}>
            <div className="container-fluid d-flex justify-content-center">   
                <div className="row">
                    <div className="col-md-3">
                        <Card style={{"background-color": "#eeeeee"}}>
                            <Tooltip
                                title = "Top Text "
                                position = "top-start"
                                trigger = "click"
                                > 
                                <Button type="primary"> Top </Button>
                                </Tooltip> <br /> <br />
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{"background-color": "#eeeeee"}}>
                            <Tooltip
                                title = "Right Text "
                                position = "right-start"
                                trigger = "click"
                                > 
                                <Button type="primary"> Right</Button>
                                  </Tooltip> <br /> <br />
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{"background-color": "#eeeeee"}}>
                            <Tooltip
                                title = "Bottom Text "
                                position = "bottom-start"
                                trigger = "click"
                                > 
                                <Button type="primary"> Bottom </Button>
                                </Tooltip> <br /> <br />
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{"background-color": "#eeeeee"}}>
                            <Tooltip
                                title = "Left Text "
                                position = "left-start"
                                trigger = "click"
                                > 
                                <Button type="primary"> Left</Button>
                                </Tooltip> <br /> <br />
                        </Card>
                    </div>
                </div>
                </div>
                <br />  <br />  
                <div id="container-fluid justify-content-center " style={{"paddingLeft":"2rem"}}>
                    <label> Set tooltip position:
                        <select value={tooltipPosition} onChange={this.handleChange}>
                        <option value="">--Select any of the choise from below--</option>   
                        <option value="top">Top</option>
                        <option value="right">Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        </select>
                    </label> <span>Hover Below to check</span>
                    <div id="main" onMouseEnter={this.onHover} onMouseLeave={this.onLeave} style={{"height":"5rem","width":"44rem","border":"2px solid black"}}>
                        {(showTooltip &&  
                             <TooltipMe props ={tooltipPosition} />)}
                        {(box === 'text')} 
                    </div>
                </div>
        </Content>

        
        <Footer style = {{
            "text-align" : "center"
        }}>
             <p> @Used Ant Design For React Tool Tip</p>
        </Footer>

</Layout>
          
        )
      }
    
}

export default Home ;