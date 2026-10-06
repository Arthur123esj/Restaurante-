"use client"

import { useState } from "react"

export default function Home() {
  const [comidas, setComidas] = useState(false)
  const [bebidas, setBebidas] = useState(false)
  const [sobremesas, setSobremesas] = useState(false)

  return (
    <>
      <header className="titulo">
        <h1>Bem vindo ao Brasa Alemã</h1>
      </header>

      <main>
        <h3 className="descricao">
          Seja bem-vindo ao Brasa Alemã!
          Explore nosso cardápio e descubra uma seleção especial de pratos, 
          bebidas e sobremesas preparados para tornar sua experiência ainda 
          mais saborosa.
        </h3>

        <div className="cardapios">

          <div className="comidas">
            <button onClick={() => setComidas(!comidas)}>
              Cardápio de Comidas
            </button>

            {comidas && (
              <div className="cc">
                <h1>Comidas</h1>
                <p>1-Bife à milanesa</p>
                <p>2-Almôndegas</p>
                <p>3-Salsicha com molho</p>
                <p>4-Repolho recheado</p>
                <p>5-Panqueca de carne</p>
              </div>
            )}
          </div>

          <div className="bebidas">
            <button onClick={() => setBebidas(!bebidas)}>
              Cardápio de Bebidas
            </button>

            {bebidas && (
              <div className="br">
                <h1>Bebidas</h1>
                <p>1-Chopp</p>
                <p>2-Cerveja</p>
                <p>3-Coca-Cola</p>
                <p>4-Licor de frutas alemão</p>
                <p>5-Guaraná</p>
              </div>
            )}
          </div>

          <div className="sb">
            <button onClick={() => setSobremesas(!sobremesas)}>
              Cardápio de Sobremesas
            </button>

            {sobremesas && (
              <div className="sm">
                <h1>Sobremesas</h1>
                <p>1-Floresta Negra</p>
                <p>2-Cuca</p>
                <p>3-Bolo de maçã</p>
                <p>4-Strudel de maçã</p>
                <p>5-Pudim de leite condensado</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <footer className="sobre">
        <h1>Sobre o nosso Restaurante</h1>
        <p>
          Nosso restaurante busca trazer a tradição da culinária alemã para cada detalhe da experiência. 
          Servimos pratos típicos preparados com ingredientes selecionados, preservando receitas e sabores 
          que fazem parte da cultura alemã.

          Aqui, você encontra pratos tradicionais como salsichas artesanais, schnitzel, joelho de porco e 
          acompanhamentos típicos, além de bebidas e sobremesas inspiradas na Alemanha.

          Nosso ambiente foi pensado para ser acolhedor e tradicional, proporcionando uma experiência 
          que combina boa comida, cultura e a hospitalidade alemã.

        </p>
      </footer>
    </>
  )
}