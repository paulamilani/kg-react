# ⚛️ KidsGame

## App jogo infantil para desenvolvimento da aprendizagem

Esse é o projeto do curso **ESPECIALIZAÇÃO LATO SENSU EM DESENVOLVIMENTO DE SISTEMAS PARA DISPOSITIVOS MÓVEIS** IFSP campus São Carlos.

## 📱 Projeto

Este projeto usa da associação de imagens figuras do dia a dia, auxiliar desenvolvimento infantil.

Público-alvo: O público alvo que o app deseja alcançar é crianças de 2 a 5 anos.


## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias utilizadas no projeto são:

- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `ScrollView`: container para blocos de componentes com barra de rolagem
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
- `Componentes customizados`: criação e utilização de componentes customizados
- `Suporte a telas`: não permitir que conteúdos estejam sob a *StatusBar* (barra superior nativa) ou barra de gestos do iPhone
- `Expo Google Fonts`: suporte a fontes do google via Expo
- `StyleSheet`: estilização básica de componentes
- `Dimensions`: captura de dados das dimenções da tela
- `biblioteca react-navigation`: para navegação de telas
- `Eslint`: para análise de código
- `npm`: para gerenciamento de pacotes


## 📲 Executando o projeto

### ✔️ Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `npm`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;
- Pode ser utilizado também a opção web de emulador, o app será aberto em uma página web no seu navegador.

Se quiser testar as instalações, rodar os comandos abaixo separadamente deve mostrar as respectivas versões.

```
git --version
node --version
npm --version
```

Com o `node` instalado instalar a dependencia com o seguinte comando:
```
npx expo install react-native-web@~0.18.10 react-dom@18.2.0
@expo/webpack-config@^18.0.1
```


### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```
npm install
```

Então podemos rodar o projeto:
```
npm run android


npm run ios


npm run web
```

Caso estiver com o celular, **escaneie o QR code com o aplicativo do Expo** ou a câmera que aparecerá no terminal.
Se tiver um emulador, escolha o comando de execução sugerido no terminal.

Pronto, agora o app você deve ver o app rodando.