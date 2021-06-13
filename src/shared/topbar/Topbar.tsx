import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TopbarBrand from './TopbarBrand';

const Topbar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar className='d-flex flex-row justify-content-between'>
        <TopbarBrand
          brandText={<Typography variant='h6'>Rei Armenia</Typography>}
          linkTo='/'
          className='topbar-brand'
        />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
