/* eslint-disable react/prop-types */

import Button from "../shadcn/Button/Button"
import * as Form from '@radix-ui/react-form';

/**
 * @callback ForgotPasswordOnSubmit
 * @param {string} email
 * @param {Event} event
 * @returns {void}
*/

/**
 * Login form made with {@link https://www.radix-ui.com/primitives/docs/components/form} and shadcn button {@link https://ui.shadcn.com/docs/components/button} 
 * @param {object} props
 * @param {ForgotPasswordOnSubmit} props.onSubmit Function that will execute once the login form submits. It already prevents event default. 
 * @param {function(Event):void} props.onClickLogin Function that executes when user clicks Login button
 * @returns {Element}
*/
const ForgotPasswordForm = ({onSubmit, onClickLogin}) => {

    return (
        <Form.Root
            className="mt-8"
            onSubmit={ ev => {
                ev.preventDefault();
                onSubmit(ev.target[0].value, ev.target[1].value, ev);
            } }
        >
            <Form.Field className="flex space-x-2">
                <Form.Message
                    name="email"
                    match={"typeMismatch"}
                    className="text-xs text-destructive"
                >
                    Ingresa un correo electrónico válido
                </Form.Message>
                <Form.Message
                    name="email"
                    match={"valueMissing"}
                    className="text-xs text-destructive"
                >
                    Ingresa tu correo electrónico
                </Form.Message>
            </Form.Field>
            <div className="-space-y-px rounded-md mb-1">
                <Form.Field name="email">
                    <Form.Message
                        name="email"
                        match={(value) => value === "" }
                        className="text-xs text-destructive"
                    >
                        Ingresa tu correo electrónico
                    </Form.Message>
                    <Form.Label className="sr-only">
                        Correo Electrónico
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        />
                    </Form.Control>
                </Form.Field>
            </div>
            <Button
                variant="link"
                size="sm"
                className="m-0 p-0 h-fit mb-4"
                type="button"
                onClick={ () => { onClickLogin() } }
            >
                Volver a inicio de sesión
            </Button>
            <Form.Submit asChild>
                <Button className={"w-full font-bold"} hover="outline" >
                    Enviar Correo
                </Button>
            </Form.Submit>
        </Form.Root>
                
    )
}

export default ForgotPasswordForm