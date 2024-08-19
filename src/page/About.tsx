import { Box, Button, Card, CardContent, CardMedia, Link, Typography } from '@mui/material'

function About({ num, path, name }: { num: number; path: string; name: string }) {
  return (
    <Box sx={{ display: 'flex', width: '100vw', alignItems: 'center', justifyContent: 'center' }}>
      {/* the first Box */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '716px',
          width: ' 49.583vw',
          hight: '15.009vh',
          mt: '160px',
          ml: '324px'
        }}
      >
        {/* image box */}
        <Card
          sx={{
            maxWidth: 500,
            maxHeight: 353,
            backgroundColor: 'rgba(14, 1, 30, 1)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <CardMedia
            component='img'
            alt='green iguana'
            height='160'
            image={path}
            width='160'
            sx={{ borderRadius: ' 10px 10px 0 0', mr: '10px' }}
          />
          <CardContent
            sx={{
              width: '118px',
              height: '148px', // I corrected 'high' to 'height'
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
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
                m: '30px 10px 0px 0px'
              }}
            >
              {name}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif', // Font family
                  fontWeight: 400, // Font weight (regular)
                  fontSize: '16px', // Font size
                  lineHeight: '19.36px', // Line height
                  letterSpacing: '0.02em', // 2% letter spacing
                  color: 'rgba(231, 134, 255, 1)', // Text color
                  backgroundColor: '#34500',
                  textAlign: 'center',
                  width: '97px'
                }}
              >
                {`# ${num}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins, sans-serif', // Font family
                  fontWeight: 300, // Font weight
                  fontStyle: 'italic', // Italic style
                  fontSize: '12px', // Font size
                  lineHeight: '20px', // Line height
                  textAlign: 'center', // Center alignment
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '4px' // Margin top for spacing
                }}
              >
                VOTES
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box>
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
              alignItems: 'center', // Vertical alignment
              mt: '114px'
            }}
          >
            vote
          </Button>
        </Box>
      </Box>

      {/* the sec Box */}
      <Box
        sx={{
          width: '716px', // Fixed width of 716px
          height: '854px', // Hug height of 854px
          position: 'absolute', // Assuming top and left positions are relative to the nearest positioned ancestor
          top: '388px', // Position from the top
          left: '524px', // Position from the left
          gap: '10px', // Gap between child elements if it's a flexbox or grid container
          display: 'flex', // Assuming flexbox to apply gap between child elements
          flexDirection: 'column' // Assuming column direction for flexbox
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link
            sx={{
              width: '500px', // Fixed width
              height: '20px', // Fixed height
              fontFamily: 'Poppins, sans-serif', // Font family
              fontWeight: 500, // Font weight (medium)
              fontSize: '24px', // Font size
              lineHeight: '20px', // Line height
              textAlign: 'left', // Center alignment
              color: 'rgba(255, 255, 255, 1)'
            }}
          >
            MANIFESTO BY Xi Jinping
          </Link>
          <Box
            sx={{
              width: '100%', // Adjust this to the desired width or set a fixed width like '716px'
              height: '100%', // Adjust this to the desired height or set a fixed height like '854px'
              opacity: 0.5 // Sets the opacity to 50%
            }}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.5' clip-path='url(#clip0_78_1827)'>
                <path d='M9 15L15 9' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
                <path
                  d='M11 6.00031L11.463 5.46431C12.4008 4.52663 13.6727 3.99991 14.9989 4C16.325 4.00009 17.5968 4.527 18.5345 5.46481C19.4722 6.40261 19.9989 7.6745 19.9988 9.00066C19.9987 10.3268 19.4718 11.5986 18.534 12.5363L18 13.0003'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13.0001 18L12.6031 18.534C11.6544 19.4722 10.3739 19.9984 9.03964 19.9984C7.70535 19.9984 6.42489 19.4722 5.47614 18.534C5.0085 18.0716 4.63724 17.521 4.38385 16.9141C4.13047 16.3073 4 15.6561 4 14.9985C4 14.3408 4.13047 13.6897 4.38385 13.0829C4.63724 12.476 5.0085 11.9254 5.47614 11.463L6.00014 11'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_78_1827'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              width: '716px', // Fixed width
              height: '820px', // Fixed height
              fontFamily: 'Poppins, sans-serif', // Font family
              fontWeight: 300, // Light font weight
              fontSize: '14px', // Font size
              lineHeight: '20px', // Line height
              textAlign: 'justify', // Justified text alignment
              color: 'rgba(255, 255, 255, 1)', // Text color
              overflowY: 'auto' // Allows scrolling if content overflows the height
            }}
          >
            Under the leadership of the Communist Party of China (CPC), which remains the defining feature of socialism
            with Chinese characteristics, we are committed to guiding our nation towards the great mission of national
            rejuvenation, ensuring stability, unity, and progress by strengthening the Party’s central role in
            governance, thereby aligning our policies with the aspirations of the Chinese people and promoting political
            stability, economic development, and social harmony while preserving our nation's unity and integrity. As
            China’s sovereignty and territorial integrity are sacred and inviolable, we will focus on strengthening
            national defense and security mechanisms to safeguard our borders, uphold our territorial claims, and assert
            our rightful place on the global stage through initiatives such as the Belt and Road, while modernizing the
            People’s Liberation Army to ensure it is technologically advanced and capable of defending against any
            threats. Our commitment to economic development, the cornerstone of China’s modernization, will see us
            transitioning from an era of high-speed growth to one of high-quality development by deepening supply-side
            structural reforms, fostering innovation-driven growth, and ensuring balanced development across urban and
            rural areas, with the "Made in China 2025" initiative positioning us as a global leader in high-tech
            industries, thus creating a resilient and competitive economy for all citizens. In our pursuit of building a
            moderately prosperous society, we are dedicated to addressing income inequality, eradicating poverty, and
            improving living standards through targeted policies that enhance access to quality education, healthcare,
            and social security, ensuring that every citizen has the opportunity to prosper and contribute to the
            nation’s growth. Recognizing the essential nature of ecological civilization for sustainable development, we
            will balance economic growth with environmental protection by reducing pollution, promoting renewable
            energy, and intensifying efforts to combat climate change, thereby creating a cleaner, healthier environment
            for all, and ensuring that future generations inherit a China that is both prosperous and beautiful, setting
            a global example in environmental sustainability. To support the great revival of the Chinese nation, we
            will promote core socialist values, strengthen cultural education, and ensure that our arts and media
            reflect the spirit of our times, thereby fostering cultural confidence that inspires patriotism and unity
            among all Chinese people, with our rich heritage and modern innovations serving as a source of national
            pride and contributing to the strength of our national identity. As China’s rise continues to be peaceful,
            rooted in our commitment to non-interference, mutual respect, and win-win cooperation, we will advocate for
            a new type of international relations that emphasizes equality, fairness, and justice, with active
            participation in global governance, contributions to world peace, and support for global development
            initiatives, promoting multilateralism and international cooperation to build a community with a shared
            future for mankind, ensuring that China’s development contributes to global prosperity and stability, making
            the world a better place for all. As we stand at the threshold of a new era, we remain steadfast in our
            commitment to the great rejuvenation of the Chinese nation, and under my leadership, we will continue to
            follow the path of socialism with Chinese characteristics, ensuring that China remains strong, prosperous,
            and harmonious as we build a future where every citizen can share in the glory of our great nation, for a
            strong, prosperous, and harmonious China!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '716px', // Fixed width
              height: '118px', // Fixed height
              backgroundColor: 'rgba(0, 0, 0, 1)', // Background color
              boxShadow: '0px -4px 20px 0px rgba(255, 255, 255, 0.25)' // Drop shadow
            }}
          >
            <Button
              sx={{
                color: 'rgba(255, 255, 255, 1)',
                width: '600px', // Fixed width
                height: '36px', // Fixed height
                borderRadius: '8px', // Rounded corners
                border: '2px solid', // 2px border
                padding: '11px 56px', // Padding on all sides
                gap: '10px', // Gap between child elements
                opacity: 0.3, // 30% opacity
                background: 'linear-gradient(90deg, rgba(225, 102, 255, 1) 0%, rgba(181, 4, 225, 1) 100%)' // Linear gradient background
              }}
            >
              vote
            </Button>
          </Box>
        </Box>
        {/* button container */}
      </Box>
    </Box>
  )
}

export default About
