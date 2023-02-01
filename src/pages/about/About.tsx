import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import './About.css';
import { Icon, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/system';
import Header from '../../components/DesktopHeader';



export default function About() {
    return (
        <Container id="body">
            <Header />
        <Grid xs={12}>
        <Box>
            <Typography id="title" variant='h1' gutterBottom component='h1' align='center' >
                Green Heart 💚
            </Typography>

        </Box>
        </Grid>

        <Box fontStyle="italic" sx={{ w:1 }}>
        <Typography id="colour" variant="subtitle1" gutterBottom align='center'>
        Somos o Green Heart, uma rede social que tem como objetivo mobilizar e unir pessoas engajadas em reduzir os impactos das mudanças climáticas no planeta. Unidos para conscientizar outras pessoas a fazer a diferença.
      </Typography>

      <Typography id="colour" variant="subtitle1" gutterBottom align='center'>
       
        O ODS (Objetivos de Desenvolvimento Sustentável) 13 é em prol de combater as mudanças climáticas e ajudar no desenvolvimento do nosso planeta. Juntos fazemos a diferença, mobilizar pessoas é um ato de cuidado. Seja você um Green Heart e faça parte da nossa rede social.

      </Typography>

      <Typography id="colour" variant="subtitle1">
       
       Seja você um Green Heart e faça parte da nossa rede social.


      </Typography>

      <Typography marginTop={10} mx={10} id='colour'>Nossa equipe,</Typography>

                <Grid container spacing={1} minHeight={300}>
                    <Grid display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                        <Avatar src="https://avatars.githubusercontent.com/u/112709239?v=4"
                            sx={{ width: 100, height: 100 }} />
                        <Typography className='text' variant="h6" color="initial">Kaique </Typography>
                        <Link href="https://www.linkedin.com/in/kaique213/">
                            <LinkedInIcon />
                        </Link>
                    </Grid>

                    <Grid display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                        <Avatar src="https://cdn.discordapp.com/attachments/1049282802560008232/1052607922384941106/138320927_2108141845989118_2803333994106948376_n_resized.jpg"
                            sx={{ width: 100, height: 100, marginLeft: 6 }} />
                        <Typography className='text' marginLeft={5} variant="h6" color="initial"> Roseane</Typography>
                        <Link href="https://www.linkedin.com/in/roseane-carreiro-de-melo-45a504206/">
                         <LinkedInIcon />
                        </Link>
                    </Grid>
                    
                    <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar src="https://avatars.githubusercontent.com/u/112709178?v=4"
                            sx={{ width: 100, height: 100, marginLeft: 3 }} />
                        <Typography className='text' variant="h6" color="initial">Arthur</Typography>
                        <Link href="https://www.linkedin.com/in/arthur-marques-farias-4b42b5182/">
                         <LinkedInIcon />
                        </Link>
                    </Grid>

                    <Grid xs display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                        <Avatar src="https://cdn.discordapp.com/attachments/1025066610572144813/1070096446902259762/jotinha3.jpeg"
                            sx={{ width: 100, height: 100, marginLeft: 3 }} />
                        <Typography className='text' variant="h6"marginLeft={3} color="initial">João Victor</Typography>
                        <Link href="https://www.linkedin.com/in/joaovicarvalho/">
                            <LinkedInIcon />
                        </Link>
                    </Grid>

                    <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar src="https://avatars.githubusercontent.com/u/99145534?v=4"
                            sx={{ width: 100, height: 100, marginLeft: 3 }} />
                        <Typography className='text' variant="h6" marginLeft={2} color="initial">Victor </Typography>
                        <Link href="https://www.linkedin.com/in/victor-antonino/">
                            <LinkedInIcon />
                        </Link>

                    </Grid>

                    <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                        <Avatar src="https://avatars.githubusercontent.com/u/79030781?v=4"
                            sx={{ width: 100, height: 100, marginLeft: 1 }} />
                        <Typography className='text' variant="h6" color="initial">Alexsander</Typography>
                        <Link href="https://www.instagram.com/alexsandermog/">
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                    
                    <Grid flexDirection='column' display="flex" justifyContent="center" alignItems="center">
                        <Avatar src="https://avatars.githubusercontent.com/u/112710222?v=4"
                            sx={{ width: 100, height: 100, marginLeft: 3 }} />
                        <Typography className='text' variant="h6"  marginLeft={2} color="initial">Daniela </Typography>
                        <Link href="https://www.linkedin.com/in/daniela-nascimento-528a531ab/">
                            <LinkedInIcon />
                        </Link>

                    </Grid>


                </Grid>

            </Box>
            
            </Container>        
    );
}

export { About }