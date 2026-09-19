# EcoScanner — versão preparada para apresentação do TCC

Projeto React exportado do Figma e ajustado para execução no GitHub Codespaces.

## Para executar no Codespaces

Na primeira abertura, o Codespaces instala as dependências automaticamente.
Depois, no terminal, execute apenas:

```bash
npm start
```

O projeto usa a porta **5173**. O Codespaces deve abrir a página automaticamente.
Se não abrir, acesse a aba **PORTS** e clique no endereço da porta 5173.

## Alternativa

Também é possível executar:

```bash
./APRESENTAR.sh
```

Esse script instala as dependências caso seja necessário e inicia o site.

## Se aparecer erro

Confirme que o terminal está na pasta onde existe o arquivo `package.json`:

```bash
ls
```

Devem aparecer, entre outros:

- `package.json`
- `index.html`
- `src`
- `vite.config.ts`

## Comandos úteis

```bash
npm start
npm run build
```

Projeto preparado para Node.js 22.
