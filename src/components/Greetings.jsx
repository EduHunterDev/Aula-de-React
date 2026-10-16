function Greetings({nome, mensagem = "Seja bem vindo"}) {
    return(
        <div className= "greeting">
            <span className= "greeting__eyebrow">React - Primeiros Passos</span>
    <h1>{nome}, {mensagem}</h1>
    <p>Esse texto nao faz sentido o motivo dele existir é apenas porquer
        Preciso de um exemplo de texto e se nao tiver nao fara sentido essa
        demonstração sem sentido
    </p>
        </div>
    );
}
export default Greetings;