import React, { ReactElement, useState } from 'react'
import axios from 'axios'

const Form = () : ReactElement => {
  const [name, setName] = useState<string>('')
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  const postData = async (first : string, last : string) =>{
    const payload = {
      first,
      last
    }

    const { data : { name }} = await axios.post('https://madiha.azurewebsites.net/api/message?', payload)
    
    setName(name)
    setFirst('')
    setLast('')
    setShow(true)
    
  }
}

export default Form