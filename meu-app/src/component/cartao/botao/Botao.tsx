import './Botao.css'

interface BotaoProps {
  rotulo: string
  destino: string
}

export default function Botao(props: BotaoProps) {
  return (
    <a className="botao-do-cartao" href={props.destino}>{props.rotulo}</a>
  )
}