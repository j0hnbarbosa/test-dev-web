import * as Yup from 'yup';


export const loginValidation = Yup.object({
  email: Yup.string()
  .email('Email invalido')
  .required('Requerido'),
  password: Yup.string()
    .min(6, 'Deve ter 6 ou mais caracteres')
    .required('Requerido')
})