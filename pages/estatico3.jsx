export function getStaticProps(){
    return{
        //O revalidate do next faz com que o proprio next verifique a validade do conteudo dentro do servidor e rendenize com o novo conteudo
        //recurso chamado (ISR)     incremental static regeneration
        revalidate: 7,
        props: {
            numero: Math.random()
        }
    }
}
//Se compilar com o npm run build e depois rodar com o npm start. Ele irá rodar com o conteudo estatico

export default function Estatico3(props){
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}