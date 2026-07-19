import './Titulo.css'

interface TituloProps {
  texto: string
}

export default function Imagem(props: TituloProps) {
  return (
    <h1 className='titulo-do-cartao'>{props.texto}</h1>
  )
}