export function error(error) {
    switch (error.status) {
        // Status de Bem-sucedidos
        case 100:
            console.info(`O código de resposta de status informativo HTTP indica que tudo até agora está OK e que o cliente deve continuar com o solicitar ou ignorá-lo se já estiver concluído: ${error.status}`);
            break;
        case 101:
            console.info(`O código de resposta HTTP indica Um protocolo para o qual o servidor alterna. O protocolo é especificado no cabeçalho da solicitação de atualização recebida de um cliente: ${error.status}`);
            break;
        case 102:
            console.info(`O código de resposta de status informativo HTTP indica ao cliente que uma solicitação completa foi recebida e o servidor está trabalhando nela: ${error.status}`);
            break;
        case 103:
            console.info(`Confirmação de Protocolo. Um servidor pode enviar várias respostas, por exemplo, após um redirecionamento. Os navegadores processam apenas a primeira resposta de dica inicial, e essa resposta deve ser descartada se a solicitação resultar em um redirecionamento entre origens. Os recursos pré-carregados da dica inicial são efetivamente pré-anexados ao elemento head do e, em seguida, seguidos pelos recursos carregados na resposta final: ${error.status}`);
            break;
        case 200:
            console.info(`O código de resposta de status de êxito HTTP indica que a solicitação foi bem-sucedida: ${error.status}`);
            break;
        case 201:
            console.info(`O código de resposta de status de êxito HTTP indica que a solicitação tem conseguiu e levou à criação de um recurso: ${error.status}`);
            break;
        case 202:
            console.info(`O código de status da resposta HTTP indica que a solicitação foi aceita para processamento, mas o processamento não foi concluído; Na verdade, o processamento pode não ter começado ainda: ${error.status}`);
            break;
        case 203:
            console.info(`A resposta HTTP status indica que a solicitação foi bem-sucedida, mas a carga anexada foi modificado por um proxy transformador daquele da origem resposta do servidor: ${error.status}`);
            break;
        case 204:
            console.info(`O código de resposta de status de êxito HTTP indica que uma solicitação foi bem-sucedida, mas que o cliente não precisa navegar para longe de sua página atual: ${error.status}`);
            break;
        case 205:
            console.info(`O status da resposta HTTP diz ao cliente para redefinir a exibição do documento (ou seja, limpar o conteúdo de um formulário, redefinir o estado da tela ou a interface do usuário): ${error.status}`);
            break;
        case 206:
            console.info(`O código de resposta de status de êxito HTTP indica que a solicitação foi bem-sucedida e o corpo contém os intervalos solicitados de dados, conforme descrito no cabeçalho Range da solicitação: ${error.status}`);
            break;
        case 207:
            console.info(`O código de resposta HTTP indica que pode haver uma mistura de respostas: ${error.status}`);
            break;
        case 208:
            console.info(`O status da resposta HTTP é usado em uma resposta Multi-Status 207 para economizar espaço e evitar conflitos. Se o mesmo recurso for solicitado várias vezes (por exemplo, como parte de uma coleção), com caminhos diferentes, apenas o primeiro será relatado com 200. As respostas para todas as outras ligações serão relatadas com esse código de status 208, para que nenhum conflito seja criado e a resposta permaneça mais curta: ${error.status}`);
            break;
        case 214:
            console.info(`Para indicar que uma transformação foi aplicada à representação: ${error.status}`);
            break;
        case 226:
            console.info(`O status de resposta HTTP, no contexto de codificações delta, é um código de status definido pelo servidor para indicar que ele está retornando um delta para a solicitação GET que recebeu. IM significa Manipulações de Instância, o termo usado para descrever um algoritmo que gera um delta: ${error.status}`);
            break;
            
        // Status de Error
        case 300:
            console.error(`O código de resposta de redirecionamento indica que a solicitação tem mais de uma resposta possível: ${url.status}`);
        case 301:
            console.error(`O código de resposta de status de redirecionamento indica que o recurso solicitado foi movido definitivamente para a URL fornecida pelos cabeçalhos. Um navegador redireciona para a nova URL e os mecanismos de pesquisa atualizam seus links para o recurso: ${url.status}`);
        case 302:
            console.error(`O código de resposta de status indica que o recurso solicitado foi movido temporariamente para a URL fornecida pelo cabeçalho. Um navegador redireciona para esta página mas os mecanismos de busca não atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' não é enviado para a nova URL): ${url.status}`);
        case 303:
            console.error(`O código de resposta de status de redirecionamento HTTP indica que os redirecionamentos não se vinculam ao recurso solicitado em si, mas a outra página (como uma página de confirmação, uma representação de um objeto do mundo real — ou uma página de progresso de upload): ${url.status}`);
        case 304:
            console.error(`A resposta de redirecionamento do cliente HTTP indica que não há necessidade de retransmitir os recursos solicitados. É um redirecionamento implícito para um recurso armazenado em cache. Isso acontece quando o método de solicitação é um método seguro, como ou , ou quando a solicitação é condicional e usa um cabeçalho ou um: ${url.status}`);
        case 305:
            console.error(`O código de status de resposta HTTP é um código de status HTTP preterido retornado por um servidor de origem para indicar que o recurso solicitado só pode ser acessado por meio de um servidor proxy: ${url.status}`);
        case 307:
            console.error(`Redirecionamento HTTP O código de resposta de status indica que o recurso solicitado foi movido temporariamente para a URL fornecida pelos cabeçalhos: ${url.status}`);
        case 308:
            console.error(`O código de resposta de status de redirecionamento HTTP indica que o recurso solicitado foi movido definitivamente para a URL fornecida por os cabeçalhos. Um navegador redireciona para esta página e pesquisa os motores atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' é enviado para a nova URL).: ${url.status}`);
        case 400:
            console.error(`O código de status da resposta HTTP indica que o servidor não pode ou não processará a solicitação devido a algo que é percebido como um erro do cliente (por exemplo, sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválido ou roteamento de solicitação enganoso): ${url.status}`);
        case 401:
            console.error(`O código de status da resposta HTTP indica que a solicitação do cliente não foi Concluído porque não possui credenciais de autenticação válidas para o recurso solicitado: ${url.status}`);
        case 402:
            console.error(`O HTTP é um código de status de resposta não padrão reservado para uso futuro. Esse código de status foi criado para habilitar sistemas digitais de pagamento em dinheiro ou (micro) e indicaria que o conteúdo solicitado não está disponível até que o cliente faça um pagamento: ${url.status}`);
        case 403:
            console.error(`Proibido: O servidor entende a solicitação, mas se recusa a atendê-la. Um servidor pode retornar um código de status 403 se não quiser revelar se a solicitação foi bem-sucedida ou fracassou ou se não quiser fornecer nenhuma pista sobre por que foi recusada: ${url.status}`);
        case 404:
            console.error(`Não Encontrado: O servidor não encontrou nada que corresponda à URL solicitada: ${url.status}`);
        case 405:
            console.error(`Método Não Permitido: O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado: ${url.status}`);
        case 406:
            console.error(`Não Aceitável: O servidor não é capaz de fornecer um recurso que atenda aos critérios estabelecidos pelos cabeçalhos da solicitação: ${url.status}`);
        case 407:
            console.error(`Autenticação de Proxy Necessária: O cliente deve primeiro autenticar-se com o proxy: ${url.status}`);
        case 408:
            console.error(`Tempo Limite de Solicitação: O servidor atingiu o tempo limite enquanto aguardava a solicitação do navegador: ${url.status}`);
        case 409:
            console.error(`Conflito: Indica que a solicitação não pôde ser processada devido a um conflito com o estado atual do recurso que a solicitação visa modificar: ${url.status}`);
        case 410:
            console.error(`Desaparecido: Indica que o recurso solicitado não está mais disponível e não será novamente. Isso deve ser usado quando um recurso foi intencionalmente removido e o recurso deve ser purgado: ${url.status}`);
        case 411:
            console.error(`Comprimento Necessário: O servidor recusa a solicitação sem um comprimento de conteúdo definido: ${url.status}`);
        case 412:
            console.error(`Pré-condição Falhou: O servidor não atendeu a uma das condições que o cliente incluiu na solicitação: ${url.status}`);
        case 413:
            console.error(`Entidade de Solicitação Muito Grande: O servidor não pode processar a solicitação porque a entidade de solicitação é muito grande: ${url.status}`);
        case 414:
            console.error(`URI de Solicitação Muito Longa: O servidor não pode processar a solicitação porque a URI é muito longa: ${url.status}`);
        case 415:
            console.error(`Tipo de Mídia Não Suportado: O servidor não suporta o tipo de mídia que foi solicitado: ${url.status}`);
        case 416:
            console.error(`Intervalo Não Satisfatório: O cliente fez uma solicitação para uma parte do arquivo que o servidor não possui ou que está fora do intervalo especificado: ${url.status}`);
        case 417:
            console.error(`Expectativa Falhou: O servidor não pode atender aos requisitos do cabeçalho Expect do cliente: ${url.status}`);
        case 418:
            console.error(`Eu Sou um Buquê de Chá: O servidor recusa a solicitação, porque está claro que o cliente é um buquê de chá: ${url.status}`);
        case 421:
            console.error(`Destino de Redirecionamento Múltiplo: O servidor redireciona a solicitação para um servidor diferente, de acordo com o cabeçalho de localização: ${url.status}`);
        case 422:
            console.error(`Entidade de Solicitação Não Processável: A solicitação foi bem formada, mas foi incapaz de ser seguida devido a erros semânticos: ${url.status}`);
        case 423:
            console.error(`Fechado: O recurso que está sendo acessado está travado: ${url.status}`);
        case 424:
            console.error(`Falha Dependente: A solicitação falhou devido a uma falha em uma solicitação anterior: ${url.status}`);
        case 425:
            console.error(`Coleção Ordenada Não é Suportada: O servidor está se recusando a processar a solicitação porque o pedido é de uma coleção ordenada: ${url.status}`);
        case 426:
            console.error(`Upgrade Obrigatório: O servidor se recusa a processar a solicitação usando o protocolo atual, mas está disposto a fazer assim se o cliente atualizar para um protocolo diferente: ${url.status}`);
        case 428:
            console.error(`Pré-condição Obrigatória: O servidor exige que a solicitação seja condicional: ${url.status}`);
        case 429:
            console.error(`Muitas Solicitações: O usuário enviou muitas solicitações em um determinado período de tempo: ${url.status}`);
        case 431:
            console.error(`Campos de Cabeçalho de Solicitação Muito Grandes: O servidor não pode processar a solicitação porque os campos de cabeçalho da solicitação são muito grandes: ${url.status}`);
        case 451:
            console.error(`Indisponível por Motivos Legais: O usuário solicitou um recurso ilegal, como uma página censurada em um país específico: ${url.status}`);
        case 500:
            console.error(`Erro Interno do Servidor: O servidor encontrou uma situação inesperada que o impediu de atender à solicitação: ${url.status}`);
        case 501:
            console.error(`Não Implementado: O servidor não reconhece o método de solicitação ou carece da capacidade para atendê-lo: ${url.status}`);
        case 502:
            console.error(`Bad Gateway: O servidor estava agindo como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream: ${url.status}`);
        case 503:
            console.error(`Serviço Indisponível: O servidor está atualmente indisponível devido a sobrecarga temporária ou manutenção do servidor: ${url.status}`);
        case 504:
            console.error(`Gateway Timeout: O servidor estava agindo como um gateway ou proxy e não recebeu uma resposta oportuna do servidor upstream: ${url.status}`);
        case 505:
            console.error(`Versão HTTP Não Suportada: A versão HTTP usada na solicitação não é suportada pelo servidor: ${url.status}`);
        case 506:
            console.error(`Variantes Também Negociam: O servidor encontrou uma condição incompatível ao processar a solicitação: ${url.status}`);
        case 507:
            console.error(`Armazenamento Insuficiente: O servidor não pode criar ou modificar o recurso solicitado porque não há espaço suficiente: ${url.status}`);
        case 508:
            console.error(`Loop Detectado: O servidor detectou um loop infinito ao processar a solicitação: ${url.status}`);
        case 509:
            console.error(`Limite de Largura de Banda Excedido: O servidor excedeu o limite de largura de banda para essa solicitação: ${url.status}`);
        case 510:
            console.error(`Não Estendido: O servidor requer uma extensão para a solicitação que o cliente não forneceu: ${url.status}`);
        case 511:
            console.error(`Requer Autenticação de Rede: O cliente precisa autenticar-se para obter acesso à rede: ${url.status}`);
        case 520:
            console.error(`Web Server Retorno de Origem Desconhecido: O servidor retornou um resultado inesperado que impede que ele atenda à solicitação: ${url.status}`);
        case 521:
            console.error(`Web Server Está Desativado: O servidor está desativado temporariamente: ${url.status}`);
        case 522:
            console.error(`Conexão com o Servidor Web Perdida: A conexão com o servidor web foi perdida: ${url.status}`);
        case 523:
            console.error(`Timeout de Origem: O servidor não respondeu dentro do tempo limite: ${url.status}`);
        case 524:
            console.error(`Uma Sessão de Tempo Limite Ocorreu: O servidor atingiu um tempo limite durante o processamento da solicitação: ${url.status}`);
        case 525:
            console.error(`SSL Handshake Falhou: O handshake SSL entre o servidor e o cliente falhou: ${url.status}`);
        case 526:
            console.error(`Certificado SSL Inválido: O servidor retornou um certificado SSL inválido: ${url.status}`);
        case 527:
            console.error(`Timeout de Nome de Host: O servidor não respondeu dentro do tempo limite de nome de host: ${url.status}`);
        case 530:
            console.error(`Erro do Servidor de Origem: O servidor de origem encontrou um erro inesperado: ${url.status}`);
        case 598:
            console.error(`Timeout de Leitura da Rede: O cliente atingiu o tempo limite de leitura da rede: ${url.status}`);
        case 599:
            console.error(`Timeout de Conexão da Rede: O cliente atingiu o tempo limite de conexão da rede: ${url.status}`);
        default:
            break;
    }

    // Error de Funcionamento
    switch (error.name) {
        case 'TypeError':
            console.error(`Erro de tipo! ${error.toString()} `);
            break;
        case 'ReferenceError':
            console.error(`Erro de referência! ${error.toString()} `);
            break;
        case 'ErrorEvent':
            console.error(`Erro de evento! ${error.toString()} `);
            break;
        case 'SyntaxError':
            console.error(`Erro de syntax! ${error.toString()} `);
            break;
        case 'RangeError':
            console.error(`Erro perigoso! ${error.toString()} `);
            break;
        default:
            break;
    }
}