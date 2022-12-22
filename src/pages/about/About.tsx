import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import './About.css';
import { Icon, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function About() {
    return (

        <Box marginTop={10} mx={1} sx={{ flexGrow: 1 }}>
            <Typography textAlign='center' className='titulo' marginBottom={5} variant="h2">
                Green Heart
            </Typography>
            <Typography className='tab5' marginLeft={15} variant="h4">
                Sobre o projeto
            </Typography>
            <Typography marginTop={2} marginX={20} variant="h4"  className='tab5'>
                Somos o Green Heart, uma rede social que tem como objetivo mobilizar e unir pessoas engajadas em reduzir os impactos das mudanças climáticas no planeta.
                Unidos para conscientizar outras pessoas a fazer a diferença.

            </Typography>
            <Typography marginBottom={5} marginX={20} className='tab5' variant="h4" >
                O ODS (Objetivos de Desenvolvimento Sustentável) 13 é em prol de combater as mudanças climáticas e ajudar no desenvolvimento do nosso planeta.
                Juntos fazemos a diferença, mobilizar pessoas é um ato de cuidado.

                Seja você um Green Heart e faça parte da nossa rede social.


            </Typography>

            <Typography marginTop={10} mx={10} className='text' variant="h4" color="initial">Nossa equipe,</Typography>

            <Grid container spacing={1} minHeight={300}>
                <Grid display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112709239?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Kaique Bruno </Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /> <LinkedInIcon/>
                    </Link>
                </Grid>

                <Grid display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://cdn.discordapp.com/attachments/1049282802560008232/1052607922384941106/138320927_2108141845989118_2803333994106948376_n_resized.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Roseane</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /> <LinkedInIcon/>
                    </Link>
                </Grid>
                <Grid xs display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://cdn.discordapp.com/attachments/1049282802560008232/1052608462951034900/IMG_20221205_140823_139.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">João Victor</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /> <LinkedInIcon/>
                    </Link>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112709178?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Arthur</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /> <LinkedInIcon/>
                    </Link>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/79030781?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Alexsander</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /><LinkedInIcon/>
                    </Link>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/99145534?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Victor Antonino</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /><LinkedInIcon/>
                    </Link>

                </Grid>
                <Grid flexDirection='column' display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112710222?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Daniela Nascimento</Typography>
                    <Link href="https://www.instagram.com/alexsandermog/">
                        <GitHubIcon /><LinkedInIcon/>
                    </Link>
                    
                </Grid>


            </Grid>
        </Box>

    );
}
export {About}