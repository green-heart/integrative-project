import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListPosting from '../../components/post/listPosting/ListPosting';
import ListTheme from '../../components/theme/listTheme/ListTheme';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NewPosting from '../../components/post/newPosting/NewPosting';
import FeedShare from '../../components/middle-column/feedshare/Index';
import ProfilePanel from '../../components/left-column/ProfilePanel';
import MiddleColumn from '../../components/middle-column';
import LeftColumn from '../../components/left-column';
import { Container } from './styles';
import { Navbar } from '../../components/statics/navbar/Navbar';
import RightColumn from '../../components/rigth-column';
import AdBanner from '../../components/AdBanner';
import Header from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';

function Home() {

    return (
        <Container>
            <Header />
            <MobileHeader />
            <span>{<AdBanner />}</span>
            <main>
                <LeftColumn />
                <MiddleColumn />
                <RightColumn />
            </main>
        </Container>
    )
}

export { Home }