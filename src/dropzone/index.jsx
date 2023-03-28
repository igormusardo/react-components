import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import './style.css'

const Dropzone = ({onFileUploaded, nameFile}) => {
    const [selectedFileUrl, setSelectFileUrl] = useState('')
    
    useEffect(() => {
        if (nameFile) {
            setSelectFileUrl(nameFile);
        }
    }, [nameFile]);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const fileUrl = URL.createObjectURL(file)
        setSelectFileUrl(fileUrl)
        onFileUploaded(file)
        
    },[onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            {
                selectedFileUrl
                    ? <img src={selectedFileUrl} alt="Imagem"/>
                    :(
                        <p>
                            <FiUpload />
                            Selecione uma imagem
                        </p>
                    )
            }
        </div>
    )
}

export default Dropzone