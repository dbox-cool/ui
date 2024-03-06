/* eslint-disable react/prop-types */

import Button from "../shadcn/Button/Button"

/**
 * @param {object} props
 * @param {string} props.img_src
 * @param {string} props.system_name
 * @returns {Element}
*/
const LoginForm = ({img_src = "./logo.png", system_name = ""}) => {
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
            {/* <MessageCard message={error} type={ETypes.DANGER} visible={!!error} /> */}
            <form
                className="mt-8 space-y-6"
                // onSubmit={handleSubmit}
            >
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                <label htmlFor="correo-electrónico" className="sr-only">
                    Correo electrónico
                </label>
                <input
                    id="correo-electrónico"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // ref={emailRef}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder="Correo electrónico"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    // ref={passwordRef}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder="Contraseña"
                />
                </div>
            </div>

            <Button variant="link" size="sm" className="m-0 p-0 h-fit" >
                ¿Olvidaste tu contraseña?
            </Button>

            <div>
                <Button className={"w-full"} >
                    Acceder
                </Button>
            </div>
            </form>
        </div>
    </section>
  )
}

export default LoginForm