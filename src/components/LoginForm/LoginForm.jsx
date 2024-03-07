/* eslint-disable react/prop-types */

import Button from "../shadcn/Button/Button"
import * as Form from '@radix-ui/react-form';

/**
 * Login form made with {@link https://www.radix-ui.com/primitives/docs/components/form} and shadcn button {@link https://ui.shadcn.com/docs/components/button} 
 * @param {object} props
 * @param {string} props.img_src
 * @param {string} props.system_name
 * @param {function(string, string, Event):void} props.onSubmit onSubmit(String email, String Password, Event ev) - Function that will execute once the login form submits. It already prevents event default. 
 * @param {function(Event):void} props.onClickForgotPassword
 * @returns {Element}
*/
const LoginForm = ({img_src = "./logo.png", system_name = "", onSubmit, onClickForgotPassword}) => {
  return (
    <section className="bg-background h-full w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
            <div>
            <img
                className="mx-auto h-52 w-auto"
                src={img_src.length == 0? "./logo.png":img_src}
                alt="logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                {
                    system_name.length == 0?
                    "Accede a tu cuenta"
                    :
                    `Bienvenido a ${system_name}`
                }
            </h2>
            </div>
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
                <Button
                    variant="link"
                    size="sm"
                    className="m-0 p-0 h-fit mb-4"
                    type="button"
                    onClick={ ev => onClickForgotPassword(ev) }
                >
                    ¿Olvidaste tu contraseña?
                </Button>
                <Form.Submit asChild>
                    <Button className={"w-full font-bold"} hover="outline" >
                        Acceder
                    </Button>
                </Form.Submit>
            </Form.Root>

        </div>
    </section>
  )
}

export default LoginForm