export const FORM_DATA = 'FORM_DATA';

export function sendFormData(formData) {
  return {
  	type: FORM_DATA,
  	payload: formData
  }

}
