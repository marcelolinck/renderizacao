export function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}
//Se compilar com o npm run build e depois rodar com o npm start. Ele irá rodar com o conteudo estatico

export default function Estatico2(props){
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}