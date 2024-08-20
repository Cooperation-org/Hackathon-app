import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

function CardMida({ num, path }: { num: number; path: string }) {
  return (
    <Card sx={{ maxWidth: 225, maxHeight: 353, backgroundColor: 'rgba(14, 1, 30, 1)' }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='200'
        image={path}
        width='200'
        sx={{ borderRadius: ' 10px 10px 0 0' }}
      />
      <CardContent>
        <Typography
          variant='h5'
          component='div'
          sx={{
            width: '168px', // Fixed width
            height: '20px', // Fixed height
            fontFamily: 'Poppins, sans-serif', // Font family
            fontWeight: 400, // Font weight
            fontSize: '30px', // Font size
            lineHeight: '20px', // Line height
            textAlign: 'center', // Text alignment
            color: 'rgba(255, 255, 255, 1)', // Text color
            display: 'flex', // Flexbox for alignment

            alignItems: 'flex-start',
            m: '10px 10px 20px 0px'
          }}
        >
          Candidate
        </Typography>

        <Typography
          sx={{
            width: '62px', // Fixed width
            height: '19px', // Fixed height
            fontFamily: 'Inter, sans-serif', // Font family
            fontWeight: 400, // Font weight (regular)
            fontSize: '16px', // Font size
            lineHeight: '19.36px', // Line height
            letterSpacing: '0.02em', // 2% letter spacing
            color: 'rgba(231, 134, 255, 1)', // Text color
            backgroundColor: '#34500'
          }}
        >
          # {num}{' '}
          <span
            style={{
              width: '36px', // Fixed width
              height: '16px', // Fixed height
              fontFamily: 'Poppins, sans-serif', // Font family
              fontWeight: 275, // Font weight (Note: Closest available weight in CSS is usually 300, as 275 might not be supported)
              fontStyle: 'italic', // Italic style
              fontSize: '12px', // Font size
              lineHeight: '20px', // Line height
              textAlign: 'center', // Center alignment
              display: 'flex', // Flexbox for alignment
              color: 'rgba(255, 255, 255, 1)',
              alignItems: 'flex-end' // Center content vertically
            }}
          >
            VOTES
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            width: '200px', // Fixed width
            height: '36px', // Fixed height
            borderRadius: '8px', // Rounded corners
            border: '2px solid', // 2px border
            padding: '11px 56px', // Padding on all sides
            gap: '10px', // Gap between child elements
            opacity: 0.3, // 30% opacity
            background: 'linear-gradient(90deg, rgba(225, 102, 255, 1) 0%, rgba(181, 4, 225, 1) 100%)', // Linear gradient background
            display: 'flex', // Flexbox for child alignment
            justifyContent: 'center', // Horizontal alignment
            alignItems: 'center' // Vertical alignment
          }}
        >
          vote
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardMida
