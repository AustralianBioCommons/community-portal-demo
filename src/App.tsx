import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, Collapse, Tooltip} from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Accessibility, Ballot, ExpandLess, ExpandMore, Fingerprint, Science} from "@mui/icons-material";
import Project, {projectTestData} from "./Project";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(11)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();

    /** deal with the drawer */
    const [menuOpened, setMenuOpened] = React.useState(false);
    const handleDrawerOpen = () => {
        setMenuOpened(true);
    };
    const handleDrawerClose = () => {
        setMenuOpened(false);
    };


    /** deal with the menu substructure */
    const menuStructure = [{name:'Account',icon:<AccountCircleIcon/>,submenu:[
            {name:'Institutional Identities',icon:<Fingerprint/>},
            {name:'Research Areas',icon:<Science/>}
        ]},
        {name: 'Projects', icon:<AccountTreeIcon/>,submenu:[]},
        {name: 'Systems', icon:<ComputerIcon/>,submenu:[
                {name:'Access',icon:<Accessibility/>},
                {name:'Allocations',icon:<Ballot/>}
            ]},
        {name: 'Data', icon:<StorageIcon/>,submenu:[
                {name:'Access',icon:<Accessibility/>},
                {name:'Allocations',icon:<Ballot/>}
            ]}];
    const [submenuOpen, setSubmenuOpen] = React.useState<Array<boolean>>(new Array<boolean>(menuStructure.length).fill(false))
    const [menuSelected, setMenuSelected] = React.useState<Array<boolean>>([false,true,false,false])

    const open_submenu = (index: number) => {
        var tmp = Array.from(submenuOpen);
        tmp[index] = !submenuOpen[index];
        setSubmenuOpen(tmp);
    }

    /** */
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={menuOpened}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 4.5,
                            marginLeft: .5,
                            ...(menuOpened && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div">
                            Community membership portal
                        </Typography>
                    </Box>
                    <Tooltip title="Open settings">
                        <Avatar alt="Uwe Winter" src="/static/images/avatar/1.jpg" />
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={menuOpened}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuStructure.map((obj, index) => (
                        <ListItem key={obj.name} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton selected={menuSelected[index]}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: menuOpened ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                key={index}
                                onClick={obj.submenu.length > 0 ? () => open_submenu(index) : () => false}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: menuOpened ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {obj.icon}
                                </ListItemIcon>
                                <ListItemText primary={obj.name} sx={{ opacity: menuOpened ? 1 : 0 }} />
                                {obj.submenu.length > 0 ? submenuOpen[index] ? <ExpandLess /> : <ExpandMore /> : ""}
                            </ListItemButton>
                            <Collapse in={submenuOpen[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {obj.submenu.map((sub_obj) => (
                                        <ListItem key={sub_obj.name} disablePadding sx={{ display: 'block', marginLeft: .5 }}>
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: menuOpened ? 'initial' : 'center',
                                                    px: 2.5,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: menuOpened ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {sub_obj.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={sub_obj.name} sx={{ opacity: menuOpened ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                    <Project name={projectTestData.name} isOwner={projectTestData.isOwner} systems={projectTestData.systems} data={projectTestData.data} users={projectTestData.users} />
            </Box>
        </Box>
    );
}
