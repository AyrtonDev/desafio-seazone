#Projeto para o desafio de vaga Frontend Seazone

###Instrução para instalação do projeto

1. primeiro clone o projeto para seu computador

2. acesse a pasta em que o projeto baixado

3. rode em seu terminal o comando
sh```
npm install

4. após roda o comando de instalação, rode o proximo comando para inicializar o projeto
sh```
npm run dev

5. se todos os passo forem seguidos de forma correta, acesse: http://localhost:3000/

6. Opcional: publiquei a versão do projeto na versel, para acessa aqui esta o link:

###Decisões técnicas

Usei praticas de SOLID, Design patterns (factory) e clean code, mas tive que adaptar a estrutura, pois usei o App Route do NextJs, tomei a decisão de usar modules e shared com base na minha ultima experiencia para escabilidade e organização, por decisão escolhi Shadcn-ui com Tailwind CSS, pois tem melhor integração com Next, usando Shadcn-ui que usa em seu core os elementos primitivos do Radix, tive a liberdade para fazer BFF para fazer acesso ao link dos dados e trata-los e transformar os dados para melhor uso no frontend, além do fator segurança que pode ser escondido links de acesso do back para servidor do Next.

###Pontos a serem melhorados

Aumentar a cobertura de testes, estudar melhor formas de implmentação do clean code, Trabalhar sistema de cache para que o server do Next use menos consumo de requisição, design melhor, melhorar implementação de SEO no projeto e fazer melhorias para padronizar o codigo usando o ESlint. 