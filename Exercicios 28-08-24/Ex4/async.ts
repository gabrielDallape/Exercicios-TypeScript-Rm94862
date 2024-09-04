// Função assíncrona para buscar dados da API
async function buscarDadosdaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simula uma chamada à API com um atraso usando setTimeout
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;  // Simula 50% de chance de sucesso

            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject(new Error('Falha ao buscar dados da API'));
            }
        }, 2000);  // Simula um atraso de 2 segundos
    });
}

// Função assíncrona para executar a busca de dados
async function executarusca(): Promise<void> {
    try {
        const dados = await buscarDadosdaAPI();  // Aguarda a resposta da API
        console.log(dados);  // Exibe os dados recebidos
    } catch (error) {
        // Captura e exibe erros
        if (error instanceof Error) {
            console.error('Erro ao buscar dados:', error.message);
        } else {
            console.error('Erro desconhecido:', error);
        }
    }
}

// Executa a busca de dados
executarusca();
