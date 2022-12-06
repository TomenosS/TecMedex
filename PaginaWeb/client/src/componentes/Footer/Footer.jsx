import "./Footer.css"

export function Footer() {
    return <div className="DivFooter">
        <footer>
            <div className="container__footer">
                <div className="box__footer">
                    <div className="servicios">
                        <h3>Servicios</h3>
                        <ul className="listServicios">
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                        </ul>
                    </div>
                </div>
                <div className="box__footer">
                    <div className="examenes">
                        <h3>Examenes/Laboratorio</h3>
                        <ul className="listServicios">
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                        </ul>
                    </div>
                </div>
                <div className="box__footer">
                    <div className="examenes">
                        <h3>Clinicas</h3>
                        <ul className="listServicios">
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                        </ul>
                    </div>
                </div>
                <div className="box__footer">
                    <div className="examenes">
                        <h3>FQA</h3>
                        <ul className="listServicios">
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                            <li className="cadaServicio">a</li>
                        </ul>
                    </div>
                </div>

                <div className="box__footer">
                    <h3>Redes Sociales</h3>
                    <a href="https://www.facebook.com/profile.php?id=100063487151360"> <i className="fab fa-facebook-square"></i> Facebook</a>
                    <a href="https://twitter.com/SushiNowARG"><i className="fab fa-twitter-square"></i> Twitter</a>
                    <a href="https://www.instagram.com/fukusuke.matsuo/"><i className="fab fa-instagram-square"></i> Instagram</a>
                </div>

            </div>

            <div className="box__copyright">
                <hr />
                    <p>Todos los derechos reservados © 2022 <b>TecMedex SPA</b></p>
            </div>
            </footer>
    </div>
}