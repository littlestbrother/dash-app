import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/joy';
import { Location } from 'react-ionicons';
// import { punchIn } from '../api/punch'

const LocationIcon = () => <Location color="white" style={{ marginBottom: '-0.3rem' }} />

const ClockIn = () => {
    const [locationError, setLocationError] = useState(null);

    const clockIn = async () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                console.log('aqui');
                console.dir(position, { depth: null, maxArrayLength: null });
                // punch in
            },
            (err) => {
                setLocationError(err?.message);
            }
        );
    }

    return (
        <Card>
            <CardContent>
                <Typography level="h2">{`It's that time...`}</Typography>
                <Button fullWidth size="lg" sx={{ mt: '1rem' }} startDecorator={<LocationIcon />} onClick={clockIn}>Clock In</Button>
                {locationError && <Typography color="danger" mt={'1rem'}>{locationError}</Typography>}
            </CardContent>
        </Card >
    );
}

export default ClockIn;