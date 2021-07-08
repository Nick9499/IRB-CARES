import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    useHistory,
} from 'react-router-dom'
import './App.css'
import { afterSchool } from './components/Hero/sliderData'

import Navbar from './components/Navbar/Navbar'
import SideBar from './components/sideBar/SideBar'
import AboutUs from './pages/AboutUs/AboutUs'
import AccomodationForAges from './pages/Accomodation/AccomodationForAges'
import AfterSchoolProgram from './pages/AfterSchoolProgram/AfterSchoolProgram'
import BabyTurtlePreservation from './pages/BabyTurtle/BabyTurtlePreservation'
import DomesticAbuse from './pages/DomesticAbbuse/DomesticAbuse'
import Home from './pages/Home/Home'
import HumanTrafficking from './pages/HumanTrafficking/HumanTrafficking'
import JobTraining from './pages/JobTraining/JobTraining'
import LifeSkills from './pages/LifeSkills/LifeSkills'
import SummerCamp from './pages/SummerCamp/SummerCamp'
import VeteranHelp from './pages/VeteranHelp/VeteranHelp'
import WaysToGive from './pages/WaysToGive/WaysToGive'
import Footer from './components/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        margin: theme.spacing(3, 3, 3),
    },
}))

function App() {
    const classes = useStyles()
    // getModalStyle is not a pure function, we roll the style only on the first render

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    useEffect(() => {
        handleOpen()
    }, [])

    return (
        <BrowserRouter>
            <Navbar />
            <SideBar />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            Join The IRB CARES Family
                        </h2>
                        <p id="transition-modal-description">
                            Help Us reach all part of America and help those in
                            need. You can donate anything you want.
                        </p>
                        <Link to="/waystogive" className="link">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClose}
                            >
                                Donate Us
                            </Button>
                        </Link>
                    </div>
                </Fade>
            </Modal>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={AboutUs} />
                <Route path="/waystogive" component={WaysToGive} />
                <Route path="/life" component={LifeSkills} />
                <Route path="/jobtraining" component={JobTraining} />
                <Route
                    path="/babyturtlespreservation"
                    component={BabyTurtlePreservation}
                />
                <Route
                    path="/humantraffickingsolutions"
                    component={HumanTrafficking}
                />
                <Route path="/summercamps" component={SummerCamp} />
                <Route path="/veteranhelp" component={VeteranHelp} />
                <Route
                    path="/accommodationsfortheaging"
                    component={AccomodationForAges}
                />
                <Route path="/domesticabuse" component={DomesticAbuse} />
                <Route path="/afterschoolprograms">
                    <AfterSchoolProgram sliderData={afterSchool} />
                </Route>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App
