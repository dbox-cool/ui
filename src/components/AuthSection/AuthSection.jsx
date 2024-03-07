import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm";

/**
 * @callback LoginOnSubmit
 * @param {string} email
 * @param {string} password
 * @param {Event} event
 * @returns {void}
*/

/**
 * @callback ForgotPasswordOnSubmit
 * @param {string} email
 * @param {Event} event
 * @returns {void}
*/

/**
 * Login form made with {@link https://www.radix-ui.com/primitives/docs/components/form} and shadcn button {@link https://ui.shadcn.com/docs/components/button} 
 * @param {object} props
 * @param {string} props.img_src Logo image source, will use public/logo.png if not defined.
 * @param {string} props.system_name 
 * @param {LoginOnSubmit} props.LoginOnSubmit Function that will execute once the login form submits. It already prevents event default. 
 * @param {ForgotPasswordOnSubmit} props.ForgotPasswordOnSubmit Function that executes when user clicks Forgot Password button
 * @returns {Element}
*/
const AuthSection = ({img_src = "./logo.png", system_name = "", LoginOnSubmit, ForgotPasswordOnSubmit}) => {
  const [currentForm, setCurrentForm] = useState("login");

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
                        currentForm == "login" &&
                        (system_name.length == 0?
                        "Accede a tu cuenta"
                        :
                        `Bienvenido a ${system_name}`)
                    }
                    {
                        currentForm == "password" &&
                        "Recupera tu cuenta"
                    }
                </h2>
                </div>
                {
                    currentForm == "login" &&
                    <LoginForm
                        onSubmit={LoginOnSubmit}
                        onClickForgotPassword={ () => {setCurrentForm("password")} }
                    />
                }
                {
                    currentForm == "password" &&
                    <ForgotPasswordForm
                        onClickLogin={ () => {setCurrentForm("login")} }
                        onSubmit={ForgotPasswordOnSubmit}
                    />
                }
            </div>
        </section>
    )
}

export default AuthSection