## Endpoints Disponíveis

- **Criar Estudo**
  - **Método**: POST
  - **URL**: `http://localhost:3000/estudos`
  - **Corpo da Requisição**:
    ```json
    {
      "nome": "Nome do Estudo",
      "descricao": "Descrição do Estudo",
      "porcentagemConcluida": 50,
      "finalizado": false
    }
    ```

## Exemplos de Requisição

### Usando `fetch`

Para fazer uma requisição POST para criar um novo estudo usando `fetch`, você pode usar o seguinte código:

```javascript

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [porcentagemConcluida, setPorcentagemConcluida] = useState(0);
  const [finalizado, setFinalizado] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await fetch('http://localhost:3000/estudos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({,
          nome,
          descricao,
          porcentagemConcluida,
          finalizado,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o estudo');
      }

      const data = await response.json();
    }


## IDEIAS

- 