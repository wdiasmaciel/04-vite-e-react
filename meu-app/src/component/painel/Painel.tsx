import './Painel.css'
import Cartao from '../cartao/Cartao'
import type CategoriaDasNoticiasInterface from '../../types/categoria-das-noticias-interface'
import categoriasDasNoticias from '../../data/categorias-das-noticias'

const categorias: CategoriaDasNoticiasInterface[] = categoriasDasNoticias

export default function Painel() {
  return (
    <div className="painel">
      {categorias.map((categoria, indice) => (
        <Cartao
          key={indice}
          caminho_da_imagem={categoria.caminho_da_imagem}
          descricao_da_imagem={categoria.descricao_da_imagem}
          texto_do_titulo={categoria.texto_do_titulo}
          texto_da_descricao={categoria.texto_da_descricao}
          rotulo_do_botao={categoria.rotulo_do_botao}
          destino_do_botao={categoria.destino_do_botao}
        />
      ))}
    </div>
  )
}

