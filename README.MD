Esse é um projeto para o conteúdo de `React Testing Library`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:

git branch

Mude para a branch sequelize-associations com o comando git checkout -b sequelize-associations. É nessa branch que você realizará a solução para o exercício.

Observe o que deve ser feito nas instruções.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/exercise-sequelize-associations`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Este repositório ja contem alguns arquivos padrões, quando utilizar `npm install` as seguintes dependências serão instaladas:

- sequelize mysql2

- sequelize-cli

Será necessário configurar o arquivo `config/config.json` com os dados de seu servidor.

Após, utilize o comando:

`npx sequelize-cli init`

#### Exercício 1

Crie o model de `Plans`.

#### Exercício 2

Crie o model de `Patients`.

#### Exercício 3

Crie o model de `Surgeries`.

#### Exercício 4

Crie o model de `Patient_surgeries`.

#### Exercício 5

Crie um endpoint que liste todos os pacientes e seus respectivos planos.

#### Exercício 6

Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.

#### Exercício 7

Crie um endpoint que de acordo com o id de um plano, que deve ser recebido via requisição, liste os pacientes que o possuem.

#### Exercício 8 (Bônus)

Crie um endpoint capaz de adicionar um novo paciente.

#### Exercício 9 (Bônus)

Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável.

#### Exercício 10 (Bônus)

Crie um endpoint que de acordo com o nome do médico, que deve ser recebido via requisição, liste todas as cirurgias realizadas pelo mesmo.