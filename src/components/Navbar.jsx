import React from 'react';
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, } from '@mui/material';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))
const UserBox = styled("Box")(({theme})=>({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Navneet Dev
        </Typography>
        <CodeOffIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge> 
          <Avatar src='https://media.licdn.com/dms/image/D4D12AQEbLPwJY8C-Zw/article-cover_image-shrink_720_1280/0/1707470435373?e=2147483647&v=beta&t=2_QR05sQBetReUTv49cXCuGvAdHBoxaqJM6s9RBSxW4'
           sx={{width:"30px", height: "30px", }} />
        </Icons>
        <UserBox> 
        <Avatar src='https://media.licdn.com/dms/image/D4D12AQEbLPwJY8C-Zw/article-cover_image-shrink_720_1280/0/1707470435373?e=2147483647&v=beta&t=2_QR05sQBetReUTv49cXCuGvAdHBoxaqJM6s9RBSxW4'
           sx={{width:"30px", height: "30px", }} />
           <Typography>
            Harshit
           </Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar