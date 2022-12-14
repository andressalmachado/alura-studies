import React from "react";
import style from "./Botao.module.scss"

class Botao extends React.Component<{ texto: string, type?: string }> {
    render(): React.ReactNode {

        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;