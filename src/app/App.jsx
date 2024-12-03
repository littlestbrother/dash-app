import { useEffect, useState } from 'react';

import { Container, CssBaseline, CssVarsProvider } from '@mui/joy';

import theme from './theme';
import { checkEligibility } from '../api/punch';
import { ClockIn, Downtime } from '../components';

const App = () => {
    const [clockInEligible, setCLockInEligible] = useState({});

    useEffect(() => {
        (async () => {
            const tzOffset = new Date().getTimezoneOffset(); // in minutes
            const res = await checkEligibility({ tzOffset });
            setCLockInEligible(res);
        })();

    }, [])

    return (
        <CssVarsProvider defaultMode='dark' theme={theme}>
            <CssBaseline />
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', marginTop: '1rem' }} maxWidth="sm">
                {clockInEligible
                    ? (
                        <ClockIn />
                    )
                    : (
                        <Downtime />
                    )
                }
            </Container>
        </CssVarsProvider>
    );
};

export default App;