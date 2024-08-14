import { Box, Button, Typography } from "@mui/material";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


function HomePage() {
    return (
        <Box
            sx={{
                maxWidth: '100%', // Responsive width
                height: '100vh', // Full height of the viewport/ Full height of the viewport
                display: 'flex', // Flexbox for better layout control
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
                justifyContent: 'center', // Center vertically
                textAlign: 'center',
                color: 'white',
                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f8c7/0451/22a0027d1f6eb41aade54974c689948b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDZILBnUQFvhFjpsC8S6XDkmlwdIXwikNNRs6tC5HIvtSY7eAAHYZSbbf5hB4FlAddGGnP5FZBLEdlSKtbOSYsRkMfSsCwlRMwegyqlnwNsJUrZ48-H~k~Gzb2R251VsGuAgL3K-WUFoxA9-esFhj6p9Fwm4Vt7PqTW-b7Lx5QWdXny1xDlQlGPnIAFdEHNwB3zHpHuyo11FLXygNzC9ZjEDxhz7VcJwlY4aTewZmTZFO84~aVHiFF1RTrvCCiJ4vvMZJI4pPMJu8KC4gnBEyc0sHwNiytJzhn5T8qij3mbBbu9if~cyqpaREHsnUr4YUVjTzQOKmtb8UzmqxqCYag__)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Add a subtle shadow for depth
            }}
        >
            <Navbar />
            <Box sx={{
                width: '567px',
                height: '160px',


            }}>
                <Typography
                    variant="h1"
                    sx={{

                        fontFamily: 'Inter, sans-serif',  // Font family Inter
                        fontWeight: 600,                  // Font weight of 600
                        fontSize: '60px',                 // Font size of 60px
                        lineHeight: '80px',               // Line height of 80px
                        textAlign: 'center',              // Text alignment to center
                    }}
                >
                    Empower Your <br /> Vote With
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '60px',
                        lineHeight: '80px',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, rgba(224, 126, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        padding: '8px'
                    }}>
                        Trust
                    </span>
                </Typography>



            </Box>




            <Box sx={{
                width: '228px',
                hight: '85px',
                position: 'relative',
                top: '-3px',
                left: '70px',
                pb: '15px'



            }}>
                <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{
                        fontWeight: '300',
                        fontSize: '12px',
                        alignItems: 'center'
                    }}
                >
                    Powered by: <span style={{
                        color: 'rgba(231, 134, 255, 1)',
                        fontSize: '12px',
                        fontWeight: '600',


                    }}>HEDERA BLOCKCHAINs</span>
                </Typography>
            </Box>




            <Box sx={{
                width: '545px',
                hight: '96px',


            }}>
                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontWeight: '400',
                        fontSize: '16px',
                    }}
                >
                    Experience secure, transparent, and efficient voting like never before. Our system leverages Hedera codebase technology to ensure every vote is accurately counted and tamper-proof, giving you the trust you deserve in every election.
                </Typography>
            </Box>
            <Button
                variant="contained"

                sx={{


                    position: 'absolute',
                    top: '698px',
                    left: '632px',
                    borderRadius: '8px',
                    border: '2px solid',
                    gap: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '196px',
                    height: '24px',
                    padding: '21px 30px',
                    fontSize: '14px',
                    fontWeight: '500',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    background: 'linear-gradient(90deg, rgba(225, 102, 255, 1) 0%, rgba(181, 4, 225, 1) 100%)', // التدرج اللوني
                    // Button shadow for emphasis
                }}
            >

                Get Involved

            </Button>
            <Box
                sx={{
                    width: '140px',
                    height: '140px',
                    position: 'absolute',
                    top: '765.28px',
                    left: '115px',
                    gap: '0px',
                    opacity: 1,
                    transform: 'rotate(14.17deg)',
                }}
            >
                <img src="https://s3-alpha-sig.figma.com/img/2c7b/bbef/38591e07b872979089245e9624e316bf?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TW9qku--nvHQRhJeO0agGg-EYsRr~erbmj6sJ4pEl1Hwyxhla~DgZivadLma0lmoMR72TIOz4nNRQQWQrHRJc0dl4mQFdIcPN5pw9OKb7mfSeNL97FG44zIDMR9S~~g9-r~UQdCbozAw2Kb15J0ynp6xhrWF0ErbrDmf0jqLXV-wgh5qNyGkZisW2IIiLO5pYW79tzXx89eEjX0TqhA~hZCTHqvi3S4b980fCJH0fF5XlSn3AmuRgLfR3pAdc4PN~O2Xk17LULUMhiZQN44BuzxGU1QhS8yth1neDbAjeWRzsXOPx3lkGjoGzaQpCXp5uUjlVDSACo5~9wyplYDBaA__" alt="Image" />
            </Box>
            <Box
                sx={{
                    width: '120px',
                    height: '120px',
                    position: 'absolute',
                    top: '197px',
                    left: '1209.88px',
                    gap: '0px',
                    opacity: 1,
                    transform: 'rotate(-13.93deg)',
                }}
            >
                <img src="https://s3-alpha-sig.figma.com/img/2c7b/bbef/38591e07b872979089245e9624e316bf?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TW9qku--nvHQRhJeO0agGg-EYsRr~erbmj6sJ4pEl1Hwyxhla~DgZivadLma0lmoMR72TIOz4nNRQQWQrHRJc0dl4mQFdIcPN5pw9OKb7mfSeNL97FG44zIDMR9S~~g9-r~UQdCbozAw2Kb15J0ynp6xhrWF0ErbrDmf0jqLXV-wgh5qNyGkZisW2IIiLO5pYW79tzXx89eEjX0TqhA~hZCTHqvi3S4b980fCJH0fF5XlSn3AmuRgLfR3pAdc4PN~O2Xk17LULUMhiZQN44BuzxGU1QhS8yth1neDbAjeWRzsXOPx3lkGjoGzaQpCXp5uUjlVDSACo5~9wyplYDBaA__" alt="Image" />
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;
