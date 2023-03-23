import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactQuill from 'react-quill';
import { Button } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import "./styles.css"

const configuracoes = {
    modules: {
        toolbar: [
            [{ header: "2"}, { header: [3, 4, 5]}, { font: []}],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ "list": "ordered"}, { "list": "bullet" }, {"indent": "-1"}, {"indent": "+1"}],
            ["link", "image", "video"],
        ],
    },

    formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "link",
        "image",
        "video"
    ],
};

function EditorTexto({ tituloPostagem, setTituloPostagem, conteudoHtml, setConteudoHtml,  salvarPostagem, btnDesativado }) {
    const inputRef = useRef("");
    const history = useHistory();
    useEffect(() =>  inputRef.current.focus(),[]);

    return (
        <div className="editor-container">
            <div className='editor-input-field'>
                <label htmlFor="editor-titulo">Titulo<span>*</span></label>
                <input  placeholder="Título..." ref={inputRef} id="editor-titulo" value={tituloPostagem} type="text" onChange={({ target }) => setTituloPostagem(target.value)}/>
            </div>

            <label>Conteúdo da postagem<span className="conteudo">*</span></label>
            <ReactQuill
                modules={ configuracoes.modules }
                theme="snow"
                value={ conteudoHtml } 
                onChange={ setConteudoHtml }/>
            <Button disabled={btnDesativado} onClick={salvarPostagem} className='editor-btn-salvar' color="primary">Salvar</Button>
            <Button onClick={() => history.push("/bdc")} className='editor-btn-salvar' color="danger">Cancelar</Button>
        </div>
    );
};


export default EditorTexto;