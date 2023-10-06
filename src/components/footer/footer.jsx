import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './footer.css'

const useStyles = makeStyles(() => ({

    desenv: {
        margin: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
    }
}))

export default function Footer() {

    const classes = useStyles()

    return (
        <div className='fixed-bottom'>
            <div className="footer opcy">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="main-title">Entre em contato com nosco</h3>
                            <ul className="list-unstyled">
                                <li>Phone: (11)932400681</li>
                                <li>E-mail: kalinoippc@hotmail.com</li>
                                <li>Facebook: Laudier st</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="main-title">Entre em contato com nosco</h3>
                            <ul className="list-unstyled">
                                <li>Phone: (11)932400681</li>
                                <li>E-mail: kalinoippc@hotmail.com</li>
                                <li>Facebook: Laudier st</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="main-title">Entre em contato com nosco</h3>
                            <ul className="list-unstyled">
                                <li>Phone: (11)932400681</li>
                                <li>E-mail: kalinoippc@hotmail.com</li>
                                <li>Facebook: Laudier st</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="main-title">Entre em contato com nosco</h3>
                            <ul className="list-unstyled">
                                <li>Phone: (11)932400681</li>
                                <li>E-mail: kalinoippc@hotmail.com</li>
                                <li>Facebook: Laudier st</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.desenv}>
                        &copy;{new Date().getFullYear} Desenvolvedor: José Santana de Jesus
                        <small className={classes.desenv}>
                            <br />
                            trabalhandooline2019@hotmail.com
                        </small>
                        <small className={classes.desenv}>
                            (75) 998239680
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
