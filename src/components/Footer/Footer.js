import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const history = useHistory()
    return (
        <div className="Footer">
            <h3>IRB Cares Mission Statement</h3>
            <p>
                IRB Cares works to meet the needs within our community. Driven
                by love, we present hope, healing and help to the most
                vulnerable members of society: domestic violence victims, foster
                children,veterans and widows; the forgotten members of our
                community. We always seek to partner up with local businesses in
                ways that will enhance their communities as well. Since we
                believe residents know best what is needed in their
                neighborhood.
            </p>

            <div className="Footer_bottom">
                <div className="Footer__links">
                    <Button
                        variant="text"
                        onClick={() => history.push('/life')}
                    >
                        Life Skills to Escape Poverty
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/jobtraining')}
                    >
                        Job Training
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/babyturtlespreservation')}
                    >
                        Baby Turtle Preservation
                    </Button>
                    <Button
                        variant="text"
                        onClick={() =>
                            history.push('/humantraffickingsolutions')
                        }
                    >
                        Human Trafficking Solution
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/summercamps')}
                    >
                        Summer Camps
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/veteranhelp')}
                    >
                        Veteran Help
                    </Button>
                    <Button
                        variant="text"
                        onClick={() =>
                            history.push('/accommodationsfortheaging')
                        }
                    >
                        Accomodation for the Aging
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/domesticabuse')}
                    >
                        Domestic Abuse
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/afterschoolprograms')}
                    >
                        After-school Programs
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/about')}
                    >
                        About Us
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => history.push('/waystogive')}
                    >
                        Ways To Give
                    </Button>
                </div>
                <div className="Footer__socials">
                    <span>
                        <i className="fab fa-facebook fa-2x"></i>
                    </span>
                    <span>
                        <i class="fab fa-instagram fa-2x"></i>
                    </span>
                    <span>
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </span>
                    <span>
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                </div>
            </div>
            <div className="Footer__copyright">
                <small>IRB CARES USA</small>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam!
                </small>
                <small>&copy;{new Date().getFullYear()} IRB CARES USA</small>
            </div>
        </div>
    )
}

export default Footer
