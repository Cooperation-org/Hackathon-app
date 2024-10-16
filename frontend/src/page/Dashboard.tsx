import { Box, Link, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import CardMida from './CardMida'
import Sidebar from '../Component/Sidebar'

function Dashboard() {
  const [sortBy, setSortBy] = useState('President')
  const handleSortChange = (event: any) => {
    setSortBy(event.target.value)
  }
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          backgroundColor: 'rgba(14, 1, 30, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 0,
          overflow: 'hidden',
          ml: '15vh'
        }}
      >
        {/* the first box */}
        <Box>
          {/* the top and bottom */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxHeight: '24px',
              maxWidth: '716px',
              width: ' 49.583vw',
              height: '2.251vh',
              m: '30px'
            }}
          >
            <Typography
              variant='caption'
              display='block'
              gutterBottom
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: '20px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 1)'
              }}
            >
              Top 5 Winning Candidates
            </Typography>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Sort By' }}
              sx={{ color: '#fff', backgroundColor: '#3a3a6a' }}
            >
              <MenuItem value='President'>Sort By: President</MenuItem>
              <MenuItem value='Votes'>Sort By: Votes</MenuItem>
            </Select>
          </Box>
          {/* the car  */}
          <Box
            sx={{
              m: '30px',
              maxWidth: '740px',
              width: '51.389vw',
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              flexWrap: 'wrap', // This allows items to wrap onto the next line
              justifyContent: 'center', // Centers the cards in the available space
              '& > *': {
                flex: '1 1 calc(33.33% - 20px)', // Each card will take up 1/3rd of the row minus the gap
                maxWidth: 'calc(33.33% - 20px)' // Ensures max width is constrained to 1/3rd minus the gap
              }
            }}
          >
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
              }
            />
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
              }
            />
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
              }
            />
          </Box>
        </Box>
        {/* the sec box */}
        <Box>
          {/* Candidates */}
          <Box>
            <Typography
              variant='caption'
              display='block'
              gutterBottom
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: '20px',
                textAlign: 'left',
                color: 'rgba(255, 255, 255, 1)',
                m: '30px'
              }}
            >
              Candidates
            </Typography>
          </Box>
          {/* the top and bottom */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxHeight: '24px',
              maxWidth: '716px',
              width: ' 49.583vw',
              height: '2.251vh',
              m: '30px'
            }}
          >
            <Typography
              variant='caption'
              display='block'
              gutterBottom
              sx={{
                width: '265px', // Fixed width
                height: '20px', // Fixed height
                fontFamily: 'Poppins, sans-serif', // Font family
                fontWeight: 500, // Font weight (medium)
                fontSize: '24px', // Font size
                lineHeight: '20px', // Line height
                textAlign: 'left', // Center alignment
                color: 'rgba(255, 255, 255, 1)'
              }}
            >
              Verified Candidates
            </Typography>
            <Link
              href='#'
              variant='body2'
              sx={{
                color: 'rgba(255, 255, 255, 1)',
                width: '47px', // Fixed width
                height: '20px', // Fixed height
                fontFamily: 'Poppins, sans-serif', // Font family
                fontWeight: 500, // Font weight (medium)
                fontSize: '12px', // Font size
                lineHeight: '20px', // Line height
                textAlign: 'center' // Center alignment
              }}
            >
              {'View all'}
            </Link>
          </Box>
          {/* the car  */}
          <Box
            sx={{
              m: '30px',
              maxWidth: '740px',
              width: '51.389vw',
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              // This allows items to wrap onto
              justifyContent: 'center' // Centers the cards in the
            }}
          >
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/339e/ce21/bbfacb51b8aa1cd7bc9fc5aaa5e8bc6e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLWG6DyYj2FRM0BEQy0gXag3DSIkRtWVrs0pQER1VO-~TFB2lHwu7IyZzBOdRtHCnfneNCUNejNCh4-7OZfhHOmHP933-NHkO3KRFdKTnXazTDKQZ4aeXfkvkXP2XoHCvBQBQz0iUB602sW4-SIVz3BjoFLNugOgnjfWe240nxi1hkGzCGG9iHXEXk0EnLqV4wXzLVsMEpbLBCuJH7yMyLvMjrUAVyyAY~cqxRwniVEgo8dvLJFGn10G-bd4HJ13UfaomoBfBjZ1uQHm-nsvw-6iAVFbn8Wc6AvmXofIXGjT1ZT0Eegfnn0ZDGHnoqNYIqWEgSF-pD9Dy32p6c~mqQ__'
              }
            />
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
              }
            />
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/3dfa/a8ed/c7211dcc2f9d86fa262b7190aa7252a8?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAULKaUADxb9mF0jMVVvx0WAtPKLc6daok~3sEW-EtSbGg278r-Dsl8bvXlyXx9mGOp~O3M2Vxl5dFzOFRx-hia5KRBoEZa0Qn4C4f~6WdlKGzgCAqo3xkSfh93p9mMN8SpqnrJD2WWg50rNZ9iZWTxe3qRm078Z77QbnVV7kDouS2Zm0WEom2ZsadkjyuK6feItoSvpG7hB-5fbobrJIgY3htd4KI5bHfk~TYw7gKKHuZvC90j1vwClgP3Tzw1yOj~vzMDTVz9ZX8KTd8WXfBbHMlG66~9QNKyQo-socp7MMrUOGbjSOAjrR-zrFeXlLAEoXFHy2qtsw-OXuUxN-A__'
              }
            />{' '}
            <CardMida
              num={3400}
              path={
                'https://s3-alpha-sig.figma.com/img/339e/ce21/bbfacb51b8aa1cd7bc9fc5aaa5e8bc6e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLWG6DyYj2FRM0BEQy0gXag3DSIkRtWVrs0pQER1VO-~TFB2lHwu7IyZzBOdRtHCnfneNCUNejNCh4-7OZfhHOmHP933-NHkO3KRFdKTnXazTDKQZ4aeXfkvkXP2XoHCvBQBQz0iUB602sW4-SIVz3BjoFLNugOgnjfWe240nxi1hkGzCGG9iHXEXk0EnLqV4wXzLVsMEpbLBCuJH7yMyLvMjrUAVyyAY~cqxRwniVEgo8dvLJFGn10G-bd4HJ13UfaomoBfBjZ1uQHm-nsvw-6iAVFbn8Wc6AvmXofIXGjT1ZT0Eegfnn0ZDGHnoqNYIqWEgSF-pD9Dy32p6c~mqQ__'
              }
            />
          </Box>
          {/* the result box */}
          <Box sx={{ color: 'red ', display: 'flex', flexDirection: 'column' }}>
            {/* the text box */}
            <Box sx={{ m: '50px' }}>
              <Typography
                variant='caption'
                display='block'
                gutterBottom
                sx={{
                  width: '36px', // Fixed width
                  height: '20px', // Fixed height
                  fontFamily: 'Poppins, sans-serif', // Font family
                  fontWeight: 300, // Font weight (light)
                  fontSize: '12px', // Font size
                  lineHeight: '20px', // Line height
                  textAlign: 'center', // Center alignment
                  color: 'rgba(255, 255, 255, 1)'
                }}
              >
                Result
              </Typography>
            </Box>
            {/* the No Result Found 🥲 box */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '716px', // Fixed width
                height: '20px', // Fixed height
                m: '50px'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <svg width='136' height='136' viewBox='0 0 136 136' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M134.667 117.667V76H109.667L84.6668 101H51.3335L26.3335 76H1.3335V117.667C1.3335 122.087 3.08944 126.326 6.21505 129.452C9.34066 132.577 13.5799 134.333 18.0002 134.333H118C122.42 134.333 126.66 132.577 129.785 129.452C132.911 126.326 134.667 122.087 134.667 117.667Z'
                    fill='url(#paint0_linear_76_567)'
                    fill-opacity='0.2'
                  />
                  <path
                    d='M134.667 117.667V17.6667C134.667 13.2464 132.911 9.00716 129.785 5.88155C126.66 2.75595 122.42 1 118 1H18.0002C13.5799 1 9.34066 2.75595 6.21505 5.88155C3.08944 9.00716 1.3335 13.2464 1.3335 17.6667V117.667M134.667 117.667C134.667 122.087 132.911 126.326 129.785 129.452C126.66 132.577 122.42 134.333 118 134.333H18.0002C13.5799 134.333 9.34066 132.577 6.21505 129.452C3.08944 126.326 1.3335 122.087 1.3335 117.667M134.667 117.667V76H109.667L84.6668 101H51.3335L26.3335 76H1.3335V117.667'
                    stroke='white'
                    stroke-opacity='0.5'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_76_567'
                      x1='68.0002'
                      y1='1'
                      x2='68.0002'
                      y2='134.333'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop />
                      <stop offset='1' stop-color='white' />
                    </linearGradient>
                  </defs>
                </svg>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '24px',
                    color: 'rgba(255, 255, 255, 1)',
                    mt: '20px'
                  }}
                >
                  No Result Found 😥
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
