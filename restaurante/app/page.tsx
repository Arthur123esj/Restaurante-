"use client"

import { useState } from "react"

export default function Home() {
  const [comidas, setComidas] = useState(false)
  const [bebidas, setBebidas] = useState(false)
  const [sobremesas, setSobremesas] = useState(false)

  return (
    <>
      <header className="titulo">
        <p className="subtitulo">TRADIÇÃO • SABOR • HOSPITALIDADE</p>
        <h1>Brasa Alemã</h1>
        <p className="frase">A tradição alemã à mesa brasileira</p>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre nós</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="destaque">
          <p className="etiqueta">WILLKOMMEN · BEM-VINDO</p>

          <h2>Uma tradição que dá água na boca</h2>

          <p>
            Sabores marcantes, receitas tradicionais e o prazer
            de compartilhar uma boa refeição. Conheça um pouco
            da culinária alemã sem sair do Brasil.
          </p>

          <a className="botao" href="#cardapio">
            Conheça nosso cardápio
          </a>

          <div className="enfeite">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
        </section>

        <section id="cardapio" className="secao-cardapio">
          <p className="etiqueta">NOSSA COZINHA</p>
          <h2>Sabores da casa</h2>

          <p className="introducao">
            Do prato principal à sobremesa, descubra opções
            inspiradas na tradição alemã.
          </p>

          <div className="cardapios">

            <div className="comidas">
              <div className="icone">✦</div>
              <h3>Comidas</h3>
              <p className="resumo">
                Pratos saborosos para uma refeição especial.
              </p>

              <button onClick={() => setComidas(!comidas)}>
                {comidas ? "Fechar cardápio" : "Ver comidas"}
              </button>

              {comidas && (
                <div className="lista cc">
                  <h3>Comidas da casa</h3>
                  <div className="item">
                    <span>Bife à milanesa</span>
                    <span>01</span>
                  </div>
                  <div className="item">
                    <span>Almôndegas</span>
                    <span>02</span>
                  </div>
                  <div className="item">
                    <span>Salsicha com molho</span>
                    <span>03</span>
                  </div>
                  <div className="item">
                    <span>Repolho recheado</span>
                    <span>04</span>
                  </div>
                  <div className="item">
                    <span>Panqueca de carne</span>
                    <span>05</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bebidas">
              <div className="icone">✦</div>
              <h3>Bebidas</h3>
              <p className="resumo">
                Para acompanhar cada momento e cada prato.
              </p>

              <button onClick={() => setBebidas(!bebidas)}>
                {bebidas ? "Fechar cardápio" : "Ver bebidas"}
              </button>

              {bebidas && (
                <div className="lista br">
                  <h3>Bebidas da casa</h3>
                  <div className="item">
                    <span>Chopp</span>
                    <span>01</span>
                  </div>
                  <div className="item">
                    <span>Cerveja</span>
                    <span>02</span>
                  </div>
                  <div className="item">
                    <span>Coca-Cola</span>
                    <span>03</span>
                  </div>
                  <div className="item">
                    <span>Licor de frutas alemão</span>
                    <span>04</span>
                  </div>
                  <div className="item">
                    <span>Guaraná</span>
                    <span>05</span>
                  </div>
                </div>
              )}
            </div>

            <div className="sb">
              <div className="icone">✦</div>
              <h3>Sobremesas</h3>
              <p className="resumo">
                Um toque doce para encerrar sua refeição.
              </p>

              <button onClick={() => setSobremesas(!sobremesas)}>
                {sobremesas ? "Fechar cardapio" : "Ver sobremesas"}
              </button>

              {sobremesas && (
                <div className="lista sm">
                  <h3>Doces da casa</h3>
                  <div className="item">
                    <span>Floresta Negra</span>
                    <span>01</span>
                  </div>
                  <div className="item">
                    <span>Cuca</span>
                    <span>02</span>
                  </div>
                  <div className="item">
                    <span>Bolo de maçã</span>
                    <span>03</span>
                  </div>
                  <div className="item">
                    <span>Strudel de maçã</span>
                    <span>04</span>
                  </div>
                  <div className="item">
                    <span>Pudim de leite</span>
                    <span>05</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        <section id="sobre" className="sobre">
          <div className="sobre-titulo">
            <p className="etiqueta">NOSSA HISTÓRIA</p>
            <h2>Sobre o Brasa Alemã</h2>
            <div className="linha"></div>
          </div>

          <p>
            Nosso restaurante nasceu da paixão pela culinária
            alemã e pelo prazer de reunir pessoas ao redor da mesa.
            Buscamos valorizar sabores tradicionais em um ambiente
            acolhedor, onde cada refeição se transforma em um
            momento especial.
          </p>

          <p>
            Nosso cardápio reúne pratos, bebidas e sobremesas
            inspirados na cultura alemã, combinando tradição,
            qualidade e o calor da hospitalidade brasileira.
          </p>

          <div className="assinatura">
            Gute Küche, gute Gesellschaft.
            <span>Boa comida, boa companhia.</span>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <h2>Brasa Alemã</h2>
        <p>Tradição alemã, acolhimento brasileiro.</p>
        <div className="linha-rodape"></div>
        <p className="direitos">
          © 2026 Brasa Alemã · Todos os direitos reservados
        </p>
      </footer>
    </>
  )
}