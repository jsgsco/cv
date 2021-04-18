import { useState } from 'react'
import { useFormik } from 'formik'
// import { DataUserContext } from '../../../../context/DataUserProvider'
import * as Yup from 'yup'


import './Login.sass'

const Login = () => {

    // const { } = useContext(DataUserContext)
    const [error, setError] = useState('')

    // Form validation
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            console.log(formData)
        }
    })

    return ( 
        <div className="login">
            <img src="https://jsgsco-backend.s3-us-west-1.amazonaws.com/ilustration.png" alt="Login" className="login_image"/>
            <form 
                className="login_form"
                onSubmit={ formik.handleSubmit }
            > 
                {
                    error ? (<p className="login_form_error">{error}</p>) : null
                }
                <h2 className="login_form_title">Iniciar Sesión</h2>
                <input 
                    className="login_form-input"
                    type="text" 
                    name="identifier" 
                    placeholder="Ingresa tu Email"
                    onChange={ formik.handleChange }
                    error={ formik.errors.identifier }
                />
                <input 
                    className="login_form-input"
                    type="password" 
                    name="password" 
                    placeholder="Ingresa tu Contraseña"
                    onChange={ formik.handleChange }
                    error={ formik.errors.password }
                />
                <button
                    type="submit"
                    className="login_button"
                >Ingresar</button>
                <button
                    className="login_button_pass"
                    type="button"
                >He olvidado la Contraseña  <span className="login_button_pass-pass">Recuperar Ahora</span> </button>
            </form>
        </div>
     );
}
 
function initialValues() {
    return {
        identifier: '',
        password: ''
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().email().required(),
        password: Yup.string().required()
    }
}

export default Login;