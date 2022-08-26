import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, TextareaAutosize } from '@mui/material';

const Jsonform = () => {
    const data= {
        "form":{
            "section": [
                {
                    "order": 1,
                    "section_title": "All information",
                    "fields": [
                        {
                        "name": "name",
                        "label": "name",
                        "required": true,
                        "data_type": "String",
                        "element": 'TextField',
                        "error": true,
                        "variant": 'outlined'
                        },
                        {
                            "name": "email",
                            "label": "email",
                            "required": true,
                            "data_type": "email",
                            "element": 'TextField',
                            "error": true,
                            "variant": 'outlined'
                        },
                        {
                            "name": "phone",
                            "label": "phone",
                            "required": true,
                            "data_type": "Integer",
                            "element": 'TextField',
                            "error": true,
                            "variant": 'outlined'
                        },
                        {
                            "name": "age",
                            "label": "age",
                            "required": true,
                            "data_type": "Integer",
                            "element": 'TextField',
                            "error": true,
                            "variant": 'outlined'
                        },
                        {
                            "name": "address",
                            "label": "address",
                            "hidden": "false",
                            "required": true,
                            "data_type": "Text",
                            "element": 'TextArea',
                            "error": true,
                            "variant": 'outlined',
                            "minRows": "3",
                            "placeholder": "Address"
                        }
                    ]
                }
            ]
        }
    }

    const [ value, setValue ] = useState({name: '',email:'',phone: '', age: '', address: '' })
    const [finalValue, setFinalValue] = useState([])
    const [ show, setShow ] = useState(false);

    const handleChange = (e)=>{
        //console.log('e.target.value', e.target.value)
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }
    const addRecord = (e) =>{
        e.preventDefault();
        const arr = [...finalValue];
        arr.push(value)
        setFinalValue(arr)
        alert('data is added successfully can add another data')
        setShow(true)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('value', value, finalValue)
        if(value.name === "" || value.email === "" || value.phone === "" || value.age === "" || value.address === ""){
         console.log('submit data')
            alert('all field should be filled')
        }else{
            alert(JSON.stringify(value))
            setShow(true)
        }
    }
  return (
      <form className='form-outer-wrapper' onSubmit={handleSubmit}>
        <div>
            {
                show ?
                <ul style={{listStyle: 'none'}}>
                    <li>Name:{value.name}</li>
                    <li>Email:{value.email}</li>
                    <li>Phone:{value.phone}</li>
                    <li>Age:{value.age}</li>
                    <li>Address:{value.address}</li>
                </ul>: ''
            }
        </div>
        {
            data.form.section.map(formData=>{
                return(
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}><h1>{formData.section_title}</h1></Grid>
                    {
                        formData.fields.map(inputData =>{
                            return(
                                <Grid item xs={12} sm={6}>
                                     {
                                        inputData.element === 'TextField' ? 
                                        <TextField fullWidth={true}  required={inputData.required} variant={inputData.variant} label={inputData.label}  name={inputData.name} type={inputData.data_type === "Integer"? "number" : "String"} onChange={handleChange}/>
                                        : inputData.element === 'TextArea' ?
                                        <TextareaAutosize className='textarea' fullWidth={true}   name={inputData.name} variant={inputData.variant} minRows={inputData.minRows} placeholder={inputData.placeholder} onChange={handleChange}/>
                                        : ""
                                     }
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                )
                    
            })
        }
        <div className='button'>
            <Button onClick={addRecord} variant="contained">Add Record</Button>
            <Button type='submit' variant="contained">Submit</Button>
        </div>
        
      </form>
  )
}

export default Jsonform
