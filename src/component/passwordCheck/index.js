import "./styles.css";
import { FaCheck, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
const PasswordCheck = ({ password, buttonAtivo }) => {
    const [checkTamanho, setCheckTamanho] = useState(false);
    const [checkNumero, setCheckNumero] = useState(false);
    const [checkLetraMinuscula, setCheckLetraMinuscula] = useState(false);
    const [checkLetraMaiscula, setCheckLetraMaiscula] = useState(false);
    const [checkCaracterEspecial, setCheckCaracterEspecial] = useState(false);

    useEffect(() => {
        if (password !== undefined) {
            validandoPassword();
        };
    }, [password])

    const validandoPassword = () => {
        const tamanhoPassword = password.length >= 8;
        const regexNumero = /^(?=.*[0-9]).+$/.test(password);
        const regexLetraMinuscula = /^(?=.*[a-z]).+$/.test(password);
        const regexLetraMaiscula = /^(?=.*[A-Z]).+$/.test(password);
        const regexCaracterEspecial = /[!^;,.<>\[\]\{\}\/\\()\\-\\_=+@#$%^&?~*]/.test(password);

        tamanhoPassword ? setCheckTamanho(true) : setCheckTamanho(false);
        regexNumero ? setCheckNumero(true) : setCheckNumero(false);
        regexLetraMinuscula ? setCheckLetraMinuscula(true) : setCheckLetraMinuscula(false);
        regexLetraMaiscula ? setCheckLetraMaiscula(true) : setCheckLetraMaiscula(false);
        regexCaracterEspecial ? setCheckCaracterEspecial(true) : setCheckCaracterEspecial(false);

        if (tamanhoPassword && regexNumero && regexLetraMinuscula && regexLetraMaiscula && regexCaracterEspecial) {
            buttonAtivo(true);
        } else {
            buttonAtivo(false);
        }
    };

    return (
        <div className="passwordcheck-container">
            <p className="check-title">A nova senha deve seguir os critérios:</p>
            <div className="check-item">
                {checkTamanho == true ? <FaCheck className="check" /> : <FaPlus className="plus" />}
                <span>Conter tamanho mínimo de 8 caractere</span>
            </div>
            <div className="check-item">
                {checkLetraMinuscula == true ? <FaCheck className="check" /> : <FaPlus className="plus" />}
                <span>Conter no mínimo 1 letra minúscula</span>
            </div>
            <div className="check-item">
                {checkLetraMaiscula == true ? <FaCheck className="check" /> : <FaPlus className="plus" />}
                <span>Conter no mínimo 1 letra maiúscula</span>
            </div>
            <div className="check-item">
                {checkNumero == true ? <FaCheck className="check" /> : <FaPlus className="plus" />}
                <span>Conter no mínimo 1 número</span>
            </div>
            <div className="check-item">
                {checkCaracterEspecial == true ? <FaCheck className="check" /> : <FaPlus className="plus" />}
                <span>Conter no mínimo 1 caractere especial</span>
            </div>
        </div>
    )
}

export default PasswordCheck;