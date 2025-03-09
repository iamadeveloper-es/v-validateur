
import {type ValidationRule} from './validateurTypes'

export const useValidations = () => {
  const validationRules: ValidationRule = reactive({
    'required': (value: unknown) => {
      return{
        isValid: !!value,
        message: 'El campo es requerido'
      }
    },
    'email': (value: any) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return{
        isValid: regex.test(value),
        message: 'El email no es válido'
      }
    },
    'alphaNumeric': (value: string) => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
      return{
        isValid: regex.test(value),
        message: 'El campo debe contener letras y números'
      }
    },
    'minLength': (value: string, args: string[] | number[]) => {
      return{
        isValid: value.length >= Number(args[0]),
        message: `Debe contener al menos ${args[0]} caracteres`
      }
    },
    'between': (value: number, args: number[]) => {
      return{
        isValid: Number(value) >= Number(args[0]) && Number(value) <= Number(args[1]),
        message: `El valor debe estar entre ${args[0]} y ${args[1]}`
      }
    },
    'biggerThan': (value: number, args: number[]) => {
      return{
        isValid: Number(value) > Number(args[0]),
        message: `El valor debe ser mayor que ${args[0]}`
      }
    },
    'biggerOrEqualTo': (value: number, args: number[]) => {
      return{
        isValid: Number(value) >= Number(args[0]),
        message: `El valor debe ser mayor o igual a ${args[0]}`
      }
    },
  })

  const extendValidations = (validations) => {

  }

  return {
    validationRules,
    extendValidations
  }
}
