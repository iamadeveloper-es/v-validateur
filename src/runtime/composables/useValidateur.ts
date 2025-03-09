
export const useValidateur = () => {
  
  const {validationRules} = useValidations();

  const formToValidate = ref<HTMLFormElement | null>(null)
  let formSchema: FormSchema | object = reactive({})
  const formErrorsSchema = reactive(new Map())
  const validationMode = ref('')

  const isFormValid = computed(() => formErrorsSchema.size)
  const validationErrors = computed(() => Object.fromEntries(formErrorsSchema))

  const initValidator = (el: HTMLFormElement , schema: FormSchema, mode?: ValidationMode) => {
    formToValidate.value = el
    formSchema = schema
    validationMode.value = mode || 'onSubmit'
  }

  const validate = () => {
    for(const key in formSchema){
      const validationsStatus = validateField(key)
      const isValid = validationsStatus.every((validation: object) => validation.isValid)

      if(!isValid){
        const firstError = validationsStatus.find(item => item.isValid === false)
        formErrorsSchema.set(key, firstError?.message)
      }
      else{
        formErrorsSchema.delete(key)
      }
    }
  }

  const validateField = (key: string) => {
    const field: Rule = formSchema[key]
    const value = field.value
    return field.validations.map((rule: string) => {
      const formatedRules = parseRule(rule)
      return validationRules[formatedRules.rule](value, formatedRules.args)
    })
  }

  const parseRule = (rule: string) => {
    const [ruleName, args] = rule.split(':');
    return {
      rule: ruleName,
      args: args ? args.split(',') : undefined
    };
  }


  return {
    initValidator,
    validate,
    isFormValid,
    validationErrors
  }
}
