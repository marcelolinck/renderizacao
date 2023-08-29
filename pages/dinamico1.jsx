
//dessa forma será renderizado de forma ssr. Conteudo dinamico sendo gerado no servidor
export function getServerSideProps(){

    console.log('[Server] gerando a props para o componente...')
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinanico1(props){
    return(
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
    
}