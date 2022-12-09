import emailjs from '@emailjs/browser';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Contacto.css"

export function Contacto() {

    const sendEmail = (event) => {
        emailjs.sendForm("service_55uz96h",
            "template_macuk1s",
            event.target, "aLw6KuFHA0P1h44r2")
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return (
        <div className='divForm'>
            <h2> Contáctanos </h2>
            <Form clasName="form-email" onSubmit={sendEmail}>
                <Label>Nombre y apellido</Label>
                <Input type="text" name="user_name" />
                <hr />
                <Label>Correo electronico </Label>
                <Input type="email" name="user_email" />
                <hr />
                <Label>Mensaje</Label>
                <Input type="textarea" name="user_message" id="" cols="15" rows="5"></Input>
                <hr />
                <Button>Enviar </Button>
            </Form>

        </div>
    )
}
