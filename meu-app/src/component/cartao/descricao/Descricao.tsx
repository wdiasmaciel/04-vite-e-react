import './Descricao.css'

interface DescricaoProps {
  texto: string
}

export default function Descricao(props: DescricaoProps) {
  return (
    <p className='descricao-do-cartao'>{props.texto}</p>
  )
}