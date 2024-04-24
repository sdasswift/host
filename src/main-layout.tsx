import { Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * A component that represents a main layout component
 * it will contain sidebar and pages which will pass a children
 *
 * @param children children components
 */
export interface MainLayoutProps {
  children: React.ReactNode;
}

const restSpaceStyle = (open: boolean) => ({
  flexGrow: 1,
  flexBasis: open ? 'auto' : 'calc(74px + 1px)',
  transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1)',
  width: open ? 'calc(100% - 270px)' : '100%',
});

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { }, [location]);

  return (
    <Grid container>
      {/* Grid item for MainMenu */}
      <Grid item>
        <span onClick={() => navigate('/test-1')}>Test 1</span>
        <span onClick={() => navigate('/test-2')}>Test 2</span>
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item>
            Main Header
          </Grid>

          <Grid item style={{ padding: '30px' }}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
