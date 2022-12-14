import {Component} from 'react';
import Auxillary from '../Auxillary/auxillary'
import Classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render(){
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked= {this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed= {this.sideDrawerClosedHandler}/>
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        )
    }

}  

export default Layout;