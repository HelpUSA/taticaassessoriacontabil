import React from 'react'
export default function Contact(){
  const handle = (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const d = Object.fromEntries(fd.entries());
    const subject = encodeURIComponent('Contato via site — Tática');
    const body = encodeURIComponent(`Nome: ${d.nome}\nE-mail: ${d.email}\nMensagem: ${d.mensagem}`);
    window.location.href = `mailto:contato@taticaassessoria.com.br?subject=${subject}&body=${body}`;
  }
  const wa = 'https://wa.me/5583988419118?text=' + encodeURIComponent('Olá! Gostaria de falar com a Tática.');
  return (
    <section id="contato" className="section container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
      <div>
        <h2>Fale com a Tática</h2>
        <p><strong>Endereço:</strong> Avenida João Câncio, 620 — Sala 901 — Manaíra, João Pessoa - PB</p>
        <p><strong>WhatsApp:</strong> <a href={wa} target="_blank" rel="noopener">+55 83 98841-9118</a></p>
        <p><strong>E-mail:</strong> <a href="mailto:contato@taticaassessoria.com.br">contato@taticaassessoria.com.br</a></p>
        <p><strong>Horário:</strong> Seg–Sex 08h–18h</p>
      </div>
      <form className="card" onSubmit={handle} style={{display:'grid',gap:10}}>
        <label>Nome<input name="nome" required placeholder="Seu nome"/></label>
        <label>E-mail<input name="email" type="email" required placeholder="voce@email.com"/></label>
        <label>Mensagem<textarea name="mensagem" required placeholder="Como podemos ajudar?"/></label>
        <button className="btn primary" type="submit">Enviar</button>
      </form>
    </section>
  )
}