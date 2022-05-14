## Passos para instalação e configuração do Docker (Ubuntu)
---

#### Desinstalando versões anteriores do Docker
- Para desinstalar versões anteriores do Docker na sua máquina local, digite o seguinte comando no terminal:
<br>
  ```sudo apt-get remove docker* containerd runc```
**Obs:** Caso queira desinstalar o Docker Engine como um todo, rode o seguinte comando:
<br>
  ```sudo apt-get purge docker-ce docker-ce-cli containerd.io ```
  Para remover os contêineres e informações personalizadas na sua máquina, digite os seguintes comandos:
  <br>
  ```sudo rm -rf /var/lib/docker ```
  ```sudo rm -rf /var/lib/containerd ```
<br>

- Atualize os indices de pacotes do apt
<br>
  ``` sudo apt-get update ```

#### Habilitando o uso HTTPS

- Para habilitar o a utilização de repositórios via HTTPS pelo apt-get, é necessário habilitar os seguintes pacotes:
<br>
  ```
  sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
  ```
<br>

- Para adicionar uma camada de segurança, a documentação oficial do Docker recomenda a utilização de uma chave GPG de acesso remoto ao repositório:
<br>
  ``` curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg ```
<br>

- ... e por fim, adicionamos o repositório oficial:
<br>
  ```
  echo \
    "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```
  <br>

#### Instalando o Docker Engine:
  ```
  sudo apt-get install docker-ce docker-ce-cli containerd.io
  ```

- Adicionando um usuário ao grupo de usuários docker para garantir que o usuário tenha os mesmos privilégios de _root_ :
-> Primeiro crie um grupo para que não seja necessário usar o comando _sudo_ em todos os comandos Docker:
<br>
  ``` sudo groupadd <nome_do_grupo> ```
**Obs:** Caso a mensagem _groupadd: grupo <nome_do_grupo> já existe_ apenas prossiga.
<br>

- Para adicionar o usuário ao grupo criado, digite:
<br>
  ```sudo usermod -aG <nome_do_grupo> $USER ```
<br>

- É importante ativar as alterações realizadas no grupo, podendo fazer login ou logout da sua sessão, ou digitar o comando:
<br>
  ``` newgrp <nome_do_grupo> ```
<br>

- Iniciando o Daemon do Docker
Consulte o status do daemon do Docker com o seguinte comando:
  <br>
  ``` sudo systemctl status docker ```
  <br>
Caso o relatório retorne o parâmetro _Active_ com 'stop/waiting' ou 'inactive', é necessário iniciar o daemon com o seguinte comando:
  ``` sudo systemctl start <nome_do_grupo>```
  <br>

  Caso o procedimento funcione, o terminal retornará o status como 'start/running/active' ao rodar o comando ``` sudo systemctl status docker ``` novamente.
<br>

- Após iniciado o daemon, adicione o daemon do Docker para ser inicializado durante o _boot_:
<br>
  ```sudo systemctl enable docker```
<br>

- Para validar a instalação, rode alguma imagem qualquer (como o 'hello-world') no docker:
<br>
``` docker run hello-world ```
**Obs:** Caso a imagem não esteja instalada, o Docker irá procurar no Docker hub uma imagem com o nome escolhido e, caso encontre, irá fazer seu download e rodá-la em seguida, o que pode levar alguns segundos.





