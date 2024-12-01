import { useEffect, useState } from "react";

import { Button, Card, CardContent, Divider, Grid, Typography } from "@mui/joy";
import { Cafe } from "react-ionicons";

import { create, getUpcoming } from "../api/downtime";

const CoffeeIcon = () => <Cafe color="white" style={{ marginBottom: '-0.3rem' }} />

const DayCard = ({ dayName, dayNum, monthName, monthNum, year, takenOff }) => {

    const takeOff = async () => {
        await create({ day: dayNum, month: monthNum, year });
        window.location.reload();
    }

    return (
        <Card sx={{ height: '15rem' }}>
            <CardContent>
                <Grid container justifyContent="space-between">
                    <Typography level="h1">{dayName}</Typography>
                    <Typography level="h1">{dayNum}</Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Typography level="h2">{monthName}</Typography>
                    <Typography level="h2">{year}</Typography>
                </Grid>
                <Divider sx={{ my: '1rem', border: '1px solid darkgray', borderRadius: '3px' }} />
                <Button size="lg" disabled={takenOff} startDecorator={<CoffeeIcon />} onClick={takeOff}>Take Off</Button>
            </CardContent>
        </Card>
    )
}

const Downtime = () => {
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getUpcoming();
            setUpcoming(res);
        })();
    }, [])

    return (
        <div>
            <Typography level="h2" mb={'1rem'}>Upcoming Days</Typography>
            <Grid container spacing={2}>
                {
                    upcoming.map(({ iso, dayName, dayNum, monthName, monthNum, takenOff }) => {
                        const date = new Date(iso);
                        const year = date.getFullYear();

                        return (
                            <Grid item xs={12} key={iso}>
                                <DayCard {...{ dayName, dayNum, monthName, monthNum, year, takenOff }} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Downtime;