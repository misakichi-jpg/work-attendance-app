import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React, { CSSProperties } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { NavLink } from 'react-router-dom';

type SideBarProps = {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void,
}

type drawerItemType = {
    id: number,
    item: string,
    path: string,
    icon: React.ComponentType,
};

const SideBar = ({drawerWidth, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose}: SideBarProps) => {
    const drawerItemList: drawerItemType[] = [
        {
            id: 1,
            item: 'Home',
            path: '/',
            icon: HomeIcon,
        },
        {
            id: 2,
            item: 'Report',
            path: '/report',
            icon: EqualizerIcon,
        },
        {
            id: 3,
            item: 'Export',
            path: '/export',
            icon: FileDownloadIcon,
        }
      ];
    
      const baseLinkStyle:CSSProperties = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }
      
      const activeLinkStyle:CSSProperties = {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }
    
    const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
        {drawerItemList.map((drawerItem) => (
            <NavLink key={drawerItem.id} to={drawerItem.path} style={({isActive}) => {
            return {
                ...baseLinkStyle,
                ...(isActive ? activeLinkStyle : {})
            }
            }}>
            <ListItem key={drawerItem.id} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                <drawerItem.icon />
                </ListItemIcon>
                <ListItemText primary={drawerItem.item} />
            </ListItemButton>
            </ListItem>
            </NavLink>
        ))}
        </List>
    </div>
    );
  
    return (
    <>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* モバイル版 */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* PC版 */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default SideBar