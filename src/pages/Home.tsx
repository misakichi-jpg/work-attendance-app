import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme/theme'
import FlagIcon from '@mui/icons-material/Flag';

const Home = () => {
  return (
    <Box display={'flex'}>
      {/* 左側コンテンツ */}
      <Box flexGrow={1}>
        <Grid container spacing={{xs: 1, sm: 2}}>
          <Grid item xs={4} display={'flex'} sx={{ flexDirection: 'column' }}>
            <Card
              sx={{
                bgcolor: 'blue',
                color: 'white',
                borderRadius: '10px',
                flexGrow: 1 
                }}
            >
              <CardContent sx={{ padding: {xs: 1, sm: 2} }}>
                <Stack direction={'row'}>
                  <FlagIcon />
                  <Typography>目標</Typography>
                </Stack>
                <Typography
                      textAlign={'right'}
                      variant='h5'
                      fontWeight={'fontWeightBold'}
                      sx={{ wordBreak: 'break-word', fontSize: {xs: '.8rem', sm: '1rem', md: '1.2rem'}, }}
                  >
                      ¥goal
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
      </Box>
      {/* 右側コンテンツ */}
      <Box>
        
      </Box>
    </Box>
  )
}

export default Home