export async function getServerSideProps() {
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch("http://localhost:3000/api/produtos");
  
    //Vai aguardar quando o resp for resolvido, ele irá armazenar os dados dentro de produtos.
    const produtos = await resp.json();
    return {
      props: {
        produtos,
      },
    };
  }
  
  //Se compilar com o npm run build e depois rodar com o npm start. Ele irá rodar com o conteudo estatico
  
  export default function Dinamico2(props) {
    function renderizarProdutos() {
      return props.produtos.map((produto) => {
        return (
          <li key={produto.id}>
            {produto.id} - {produto.nome} tem preço de R$ {produto.preco}
          </li>
        );
      });
    }
  
    return (
      <div>
        <h1>Dinamico #02</h1>
        <ul>{renderizarProdutos()}</ul>
      </div>
    );
  }
  