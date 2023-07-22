import React from 'react'
import useDelete from './useDelete'
import useUpload from './useUpload'
const useTransfer = async (to, from, id, data) => {
    try{
        await useUpload(to)
        await useDelete(from, id)
        console.log('Transfered!')
    }
    catch(error){
        console.log(error)
    }
}
export default useTransfer;