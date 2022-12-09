import "./Inicio.css"
import { Link } from "react-router-dom"
import { Carousel1 } from "./Carousel"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"
import * as FaIcons from "react-icons/fa"

export function Inicio() {
    return (
        <div>
            <div className="carousel">
                <Carousel1></Carousel1>
            </div>
            <div className="contenedorCartas">
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://www.lancetalent.com/blog/wp-content/uploads/Disen%CC%83o-sin-ti%CC%81tulo-1-1.png"
                        width="100%"
                        height="150px"
                    />
                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Contactanos!
                        </CardSubtitle>
                        <CardText>
                            Aqui podrás comunicarte con nosostros via e-Mail
                        </CardText>
                        <Button color="primary" href="ContactoEmpresa">
                            <FaIcons.FaAddressBook/>
                        </Button>
                    </CardBody>
                </Card>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://clinicamujer.cl/wp-content/uploads/2021/09/Header_FINAL_consulta_presencial_virtual.jpg"
                        width="100%"
                        height="150px"
                    />
                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Reserva Ahora
                        </CardSubtitle>
                        <CardText>
                            Reserva tu hora, solo debes ingresar a la web como usuario!
                        </CardText>
                        <Button href="DatosReserva" color="danger"><FaIcons.FaCalendarPlus/></Button>
                    </CardBody>
                </Card>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://s3.abcstatics.com/abc/www/multimedia/economia/2022/07/22/redessociales--RQSas1Ply2rcHWeaYv1sCwO-758x470@abc.jpg"
                        width="100%"
                        height="150px"
                    />
                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Redes Sociales
                        </CardSubtitle>
                        <CardText>
                            Aqui podrás encontrar nuestras redes sociales
                        </CardText>
                        <Button target="_blank" color="info" href="https://www.instagram.com/tecmedex.spa/"><FaIcons.FaInstagram/></Button>
                    </CardBody>
                </Card>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://www.impactbnd.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg"
                        width="100%"
                        height="150px"
                    />
                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Podras encontrar información acerca de nuestra empresa.
                        </CardText>
                        <Button color="success"href="/SobreNosotros">Acerca de nosotros</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}