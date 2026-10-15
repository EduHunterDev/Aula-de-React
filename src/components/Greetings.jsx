function Greetings({nome, mensagem = "Seja bem vindo"}) {
    return(
        <div className= "greeting">
            <span className= "greeting__eyebrow">React - Primeiros Passos</span>
    <h1>{nome}, {mensagem}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorem deleniti dolore repudiandae delectus quasi quibusdam 
        distinctio odit doloribus quia sed nesciunt nemo, sequi ipsa, 
        tempore totam tenetur? Ad, at ducimus.</p>
        </div>
    );
}
export default Greetings;