import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar= (props) => (
    <header className={Classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className = {Classes.Logo}><Logo/></div>
        <nav className= {Classes.DesktopOnly}><NavigationItems/></nav>
    </header>
)

export default toolbar