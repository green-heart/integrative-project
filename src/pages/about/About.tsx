import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import './About.css';



export default function About() {
    return (

        <Box marginTop={10} mx={1} sx={{ flexGrow: 1 }}>
            <Typography textAlign='center' className='titulo' marginBottom={5} variant="h2" color="initial">
                GREEN HEART
            </Typography>
            <Typography className='tab5' marginLeft={15} variant="h4" color="initial">
                Sobre o projeto:
            </Typography>
            <Typography marginTop={2} marginX={20} variant="h4" color="initial" className='tab5'>
                Somos o Green Heart, uma rede social que tem como objetivo mobilizar e unir pessoas engajadas em reduzir os impactos das mudanças climáticas no planeta.
                Unidos para conscientizar outras pessoas a fazer a diferença.

            </Typography>
            <Typography marginBottom={5} marginX={20} className='tab5' variant="h4" color="initial">
                O ODS (Objetivos de Desenvolvimento Sustentável) 13 é em prol de combater as mudanças climáticas e ajudar no desenvolvimento do nosso planeta.
                Juntos fazemos a diferença, mobilizar pessoas é um ato de cuidado.

                Seja você um Green Heart e faça parte da nossa rede social.


            </Typography>

            <Typography marginTop={10} mx={10} className='text' variant="h4" color="initial">Nossa equipe,</Typography>

            <Grid container spacing={1} minHeight={300}  >
                <Grid xs display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112709239?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Kaique Bruno </Typography>
                </Grid>
                <Grid display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://cdn.discordapp.com/attachments/1049282802560008232/1052607922384941106/138320927_2108141845989118_2803333994106948376_n_resized.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Roseane</Typography>
                </Grid>
                <Grid xs display="flex" justifyContent="center" flexDirection='column' alignItems="center">
                    <Avatar src="https://cdn.discordapp.com/attachments/1049282802560008232/1052608462951034900/IMG_20221205_140823_139.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">João Victor</Typography>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112709178?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Arthur</Typography>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/79030781?v=4"
                        sx={{ width: 150, height: 150 }}

                    />
                    <Typography className='text' variant="h6" color="initial">Alexsander</Typography>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/99145534?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Victor Antonino</Typography>
                </Grid>
                <Grid flexDirection='column' xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://avatars.githubusercontent.com/u/112710222?v=4"
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography className='text' variant="h6" color="initial">Daniela Nascimento</Typography>
                </Grid>


            </Grid>
        </Box>

    );
}
export {About}