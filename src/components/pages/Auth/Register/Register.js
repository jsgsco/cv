import { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { DataUserContext } from '../../../../context/DataUserProvider'


import './Register.sass'

const Register = (props) => {

    // Call the data we pass in the context
    // const { } = useContext(DataUserContext)

    // State
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
            <form 
                className="login_form"
                onSubmit={ formik.handleSubmit }
            > 
                {
                    error ? (<p className="login_form_error">{error}</p>) : null
                }
                <h2 className="login_form_title">Crear Nueva Cuenta</h2>
                <input 
                    className="login_form-input"
                    type="text" 
                    name="name" 
                    placeholder="Ingresa tu Nombre"
                    onChange={ formik.handleChange }
                    error={ formik.errors.name }
                />
                <input 
                    className="login_form-input"
                    type="text" 
                    name="lastname" 
                    placeholder="Ingresa tu Apellido"
                    onChange={ formik.handleChange }
                    error={ formik.errors.lastname }
                />
                <input 
                    className="login_form-input"
                    type="text" 
                    name="email" 
                    placeholder="Ingresa tu Email"
                    onChange={ formik.handleChange }
                    error={ formik.errors.email }
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
                >Registrarme</button>
                <button
                    className="login_button_pass"
                    type="button"
                >¿Tienes Cuenta? <Link className="login_button_pass-pass" to="/login-admin">Iniciar Sesión</Link> </button>
            </form>
            <img src="https://jsgsco-backend.s3-us-west-1.amazonaws.com/ilustration.png" alt="Login" className="login_image"/>
        </div>
     );
}
 
function initialValues() {
    return {
        name: '',
        lastname: '',
        email: '',
        password: ''
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required()
    }
}

export default withRouter(Register);