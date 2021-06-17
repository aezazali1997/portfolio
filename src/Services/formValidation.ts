import validatorjs  from 'validatorjs';
import axios from 'axios';

// @ts-ignore
import MobxReactForm from 'mobx-react-form';
// @ts-ignore
import dvr from 'mobx-react-form/lib/validators/DVR';
const fields = {
  name:
    {
      type:"text",
      label:"Name",
      placeholder:"Enter Name",
      rules:"required|string|between:5,25",
      value:'',
    },
  email: {
    type:"email",
    label:"Email",
    placeholder:"example@something.com",
    rules:"required|string|between:7,50",
  },
  message:{
    type:"text",
    label:"Message",
    placeholder:"Enter your query",
    rules:"required|string|between:30,300",
  }
}
const hooks = {
  onSuccess(form:MobxReactForm){
    const formValues=form.values();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name:formValues.name,
        email:formValues.email,
        message:formValues.message
      }
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
      }
      else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  },
  onError(form:MobxReactForm){
    console.log("Error!",form.errors());
    form.invalidate('generic error message');
  }
}
const plugins = {
  dvr:dvr(validatorjs)
}
const formOptions = {
  validateOnChange:false,
}
export const form= new MobxReactForm({fields},{plugins,hooks,formOptions});