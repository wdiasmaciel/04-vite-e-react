import './Imagem.css'

interface ImagemProps {
  caminho: string
  descricao: string
}

export default function Imagem(props: ImagemProps) {
  return (
    <img className='imagem-do-cartao' src={props.caminho} alt={props.descricao}/>
  )
}