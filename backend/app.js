'use strict';

const tools = [
  {
    name: 'API REST',
    description: 'Uma API (Application programming interface) pode ser vista como um contrato entre um provedor de dados (Servidor) e um usuário que deseja acessar e/ou manipular estes dados (Cliente).<br/> Sendo um pouco mais técnico, se trata de um estilo de arquitetura de software padronizado utilizado para permitir a comunicação entre aplicações de maneira simples e padronizada.<br/><br/>Com o sucesso e aumento do uso das APIs na web, alguns protocolos surgiram com o intuito de fornecer aos usuários um conjunto de regras/recomendações definidas para o design dessas aplicações. Entre estes estão SOAP, CML-RPC, JSON-RPC e o REST.<br/>Uma API REST (Representational State Transfer) nada mais é que uma aplicação que está em conformidade com alguns critérios pré-estabelecidos pelo "padrão" REST.<br/><br/>Na prática, você terá uma aplicação A querendo acessar recursos/serviços de uma aplicação B, essa troca de informações irá ocorrer por uma tecnologia intermediária, uma API, desenvolvida pelo time da aplicação B com o intuito de disponibilizar seus recursos para n clientes que queiram acessá-los de maneira segura e padronizada. Para executar ações na API você utiliza os CRUDS. Em sistemas Web, o equivalente são os métodos HTTP.'
  },
  {
    name: 'ReactJS',
    description: 'O React é uma biblioteca JavaScript para ajudar na criação de interfaces de usuário.<br/><br/>Ele faz com que o trabalho do desenvolvedor de implementar as interações realizadas em UIs, normalmente um trabalho muito desgastante e pouco eficiente, se torne uma tarefa mais fácil e sem dor de cabeça.<br/> Uma de suas principais características é a criação de UIs por meio da quebra de toda a estrutura da aplicação em componentes.'
  },
  {
    name: 'Redux',
    description: 'O Redux é uma outra biblioteca para armazenamento de estados de aplicações JavaScript.<br/><br/> Sua principal função é simplificar o gerenciamento dos estados nas aplicações.<br/> Basicamente, ele torna a tarefa de compartilhar estados entre vários componentes algo bem fácil e consistente.'
  },
  {
    name: 'Serverless Framework',
    description: 'Antes de mais nada, uma arquitetura serverless é um modelo de infraestrutura que abstrai o gerenciamento direto de um servidor pelo desenvolvedor da aplicação que, normalmente, possuiria um certo grau de controle das requisições feitas ao servidor e seria o responsável por cuidar dos recursos utilizados pela máquina.<br/><br/>Ainda que as aplicações serverless não necessitem de um gerenciamento direto no servidor, há um certo trabalho envolvido em coordenar todos os recursos necessários para colocar a aplicação no ar de maneira eficiente.<br/><br/>Diante disso, o Serverless framework é uma ferramenta que facilita o desenvolvimento, deploy, manutenção e segurança dessas aplicações serverless.<br/> A ferramenta é composta por uma CLI e uma dashboard que juntas, oferecem uma estrutura, automação e boas práticas permitindo assim, a implementação de arquiteturas serverless sofisticadas e rápidas.<br/><br/>Ele não apenas publica os códigos e os eventos que os ativam, mas também é responsável por criar a infraestrutura necessária que eles dependem.'
  },
  {
    name: 'AWS API Gateway',
    description: 'Uma API Gateway é uma ferramenta que fica entre o cliente e uma coleção de serviços backend.<br/><br/>A Amazon API Gateway, por sua vez, é um serviço que permite a criação, o deploy, a manutenção, o monitoramento e a segurança de uma REST API altamente escalável e que possibilita o acesso à uma enorme quantidade de serviços da Amazon.<br/><br/>Em uma arquitetura de microsserviços, uma API Gateway pode se tornar extremamente necessária pois uma única requisição poderia necessitar requisitar diversos outros serviços.'
  },
  {
    name: 'AWS Lambda',
    description: 'O AWS Lambda é um serviço de computação onde a AWS é a responsável por executar pedaços de código. Ele é utilizado para implementar aplicações que seguem o modelo serverless.<br/> Cabe ao desenvolvedor configurar quando o código será acionado, isto é, com requisições HTTP, serviços da AWS, eventos de banco de dados, etc...<br/><br/>Ele escala automaticamente e apenas cobra pelo tempo de execução do código escrito.<br/><br/>Com o Lambda, é possível quebrar a aplicação em pequenas funções que possuem uma responsabilidade única. Dessa maneira, é possível utilizá-lo para implementar aplicações voltadas para a arquitetura de microsserviços.'
  },
  {
    name: 'AWS Step Functions',
    description: 'A medida que aplicações distribuídas, compostas por várias aplicações serverless, tornam-se mais complexas, a dificuldade para gerenciar todos esses "pedaços" também aumenta.<br/><br/> O AWS Step Functions é um orquestrador de funções serverless que facilita o gerenciamento e o sequenciamento de funções do AWS Lambda através da criação dos fluxos de trabalho.'
  },
  {
    name: 'AWS DynamoDB',
    description: 'O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado pela AWS, altamente escalável, consistente e rápido. Possui event driven programming que pode ser utilizado para disparar eventos baseados em alterações que por sua vez, poderão ser observados em aplicações serverless.'
  },
  {
    name: 'AWS RDS',
    description: 'O AWS RDS (Relational Database Service) por sua vez, é um serviço de banco de dados relacional (SQL) totalmente gerenciado pela AWS. Sua principal função é facilitar a configuração, a operação e a escalabilidade de banco de dados relacionais na nuvem.'
  },
  {
    name: 'AWS Kinesis Data Streams',
    description: 'O Amazon Kinesis Data Streams é um serviço de streaming para coleta de dados em tempo real e de grande escala.<br/>O serviço pode capturar continuamente uma grande quantidade de dados por segundo de inúmeras origens.<br/> Assim que coletados, esses dados são disponibilizados em pouquíssimo tempo, possibilitando assim, análises em tempo real.'
  },
  {
    name: 'AWS S3',
    description: 'O Amazon S3 (Simple Storage Service) é um serviço para armazenamento de objetos na nuvem com capacidade para armazenar e recuperar qualquer volume de dados independentemente do local.<br/>O serviço oferece recursos de gerenciamento fáceis de utilizar e foi projetado para facilitar a computação escalável na web.'
  },
  {
    name: 'AWS Cognito',
    description: 'O Amazon Cognito é um serviço que cuida da parte da autenticação em aplicativos.<br/>Ele permite adicionar funcionalidades como cadastro, login e controle de acesso com rapidez e facilidade.<br/>Com o cognito você pode delegar todo o processo de autenticação da sua aplicação para o serviço.'
  },
  {
    name: 'AWS CloudWatch',
    description: 'Com a adoção de inúmeros serviços da Amazon pode se tornar um desafio manter o controle de todos os dados e informações destes serviços. O Amazon CloudWatch é um serviço capaz de coletar, acessar e correlacionar todos os recursos de aplicativos da AWS em tempo real, é basicamente um repositório de métricas/ferramenta de log.<br/><br/>Ele oferece uma visão unificada de todos os recursos dos aplicativos e dos serviços executados na AWS.'
  },
  {
    name: 'AWS Cloudformation',
    description: 'O AWS CloudFormation IaC (Infrastructure as Code) é um serviço que facilita a modelação e configuração de todos os recursos da AWS.<br/><br/>Com ele, é possível criar um modelo que descreve todos os recursos da AWS desejados e o próprio serviço é responsável pelo provisionamento e configuração dos recursos, simplificando assim, o gerenciamento de infraestrutura.'
  }
]

module.exports.app = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(
      tools
      ,
      null,
      2
    ),
  };
}