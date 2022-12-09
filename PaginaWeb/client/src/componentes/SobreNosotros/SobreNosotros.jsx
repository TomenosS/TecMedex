import "./SobreNosotros.css"

export function SobreNosotros() {
    return (
        <div>
            <div class="sobre">
                <section>
                    <h1 id="TextoSobre">Sobre Nosotros</h1>
                    <p classname="Parrafo" >
                        Somos una empresa dedicada a facilitar el
                        acceso de toma de horas a todos los
                        centros médicos del territorio nacional.
                        Contamos además con historiales médicos
                        y exámenes de los pacientes realizados en  diversos centros de salud.</p>
                </section>
            </div>
            <div class="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53259.886428814825!2d-70.66214345526896!3d-33.45600416969231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1670546482445!5m2!1ses!2scl"></iframe>
            </div>
            <div id="Containersobre">
                <div class="card-sobre">
                    <div class="content-sobre">
                        <div class="front-sobre">
                            <h3 class="title-sobre">Acerca de los desarrolladores</h3>
                            <p class="subtitle-sobre"></p>
                        </div>

                        <div class="back-sobre">
                            <h3 class="description-sobre" >
                                Pagina creada por Equipo TecMedexSPA
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="card-sobre">
                    <div class="content-sobre">
                        <div class="front-sobre">
                            <h3 class="title-sobre">Estamos para ti!</h3>
                            <p class="subtitle-sobre"></p>
                        </div>

                        <div class="back-sobre">
                            <h3 class="description-sobre">
                                Todos los servicios que ofrecemos los podrás
                                encontrar en nuestra pagina de inicio
                            </h3>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    )
}