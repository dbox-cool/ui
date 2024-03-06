/* eslint-disable react/prop-types */
/**
 * @param {Object} props
 * @param {String} props.img_src
 * @returns {Element}
*/
const LoginForm = ({img_src}) => {
  return (
    <section className="bg-background h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
            <div>
            <img
                className="mx-auto h-52 w-auto"
                src={img_src == undefined || img_src.length == 0 ? "./logo.png":img_src}
                alt="logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                Accede a tu cuenta
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

            <div className="flex items-center justify-between">
                <div className="text-sm">
                <a
                    className="font-medium text-primary hover:text-primary"
                    // to="/forgot-password"
                >
                    ¿Olvidaste tu contraseña?
                </a>
                </div>
            </div>

            <div>
                <button
                type="submit"
                // disabled={loading}
                className="group relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-lightgray focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-white"
                    aria-hidden="true"
                    /> */}
                </span>
                Acceder
                </button>
            </div>
            </form>

            {/* <SpacerWithText text="o accede con google" />
            <SocialSignIn setError={setError} enabled={!loading} /> */}
        </div>
    </section>
  )
}

export default LoginForm