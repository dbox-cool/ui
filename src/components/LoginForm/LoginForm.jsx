import Button from "../shadcn/Button/Button"
import { Loading } from "../Loading";
import * as Form from '@radix-ui/react-form';
import { useState } from "react";

/**
 * @callback LoginOnSubmit
 * @async
 * @param {string} email
 * @param {string} password
 * @param {Event} event
 * @returns {void}
*/

/**
 * Login form made with {@link https://www.radix-ui.com/primitives/docs/components/form} and shadcn button {@link https://ui.shadcn.com/docs/components/button} 
 * @param {object} props
 * @param {LoginOnSubmit} props.onSubmit Function that will execute once the login form submits. It already prevents event default. 
 * @param {function(Event):void} props.onClickForgotPassword Function that executes when user clicks Forgot Password link button
 * @returns {Element}
*/
const LoginForm = ({onSubmit, onClickForgotPassword}) => {

    const [loading, setLoading] = useState(false);

    return (
        <Form.Root
            className="mt-8"
            onSubmit={ async ev => {
                ev.preventDefault();
                setLoading(true);
                await onSubmit(ev.target[0].value, ev.target[1].value, ev);
                setLoading(false);
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
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field name="pwd">
                    <Form.Label className="sr-only">
                        Contraseña
                    </Form.Label>
                    <Form.Control asChild>
                        <input
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </Form.Control>
                    
                </Form.Field>
            </div>
            <div>
            <Button
                variant="link"
                size="sm"
                className="m-0 p-0 h-fit mb-4"
                type="button"
                onClick={ () => { onClickForgotPassword() } }
                disabled={loading}
            >
                ¿Olvidaste tu contraseña?
            </Button>
            </div>
            <Form.Submit asChild>
                <Button className={"w-full font-bold"} hover="outline" disabled={loading} >
                    { loading &&
                        <Loading/>
                    }
                    { !loading &&
                        "Acceder"
                    }
                </Button>
            </Form.Submit>
        </Form.Root>
                
    )
}

export default LoginForm