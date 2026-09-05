# Central de Edição — Jakeline Alessi Cerimonial

Bem-vinda(o) à central de personalização do seu site! Aqui você pode alterar fotos, dados de contato e textos sem precisar mexer em códigos complicados.

---

## COMO EDITAR O SITE

### 1. FOTOS
Entre na pasta `EditionPanel/fotos/` e substitua as imagens mantendo os mesmos nomes de arquivo:
* `hero.jpg`: Foto principal da primeira dobra do site.
* `sobre.jpg`: Foto da Jakeline Alessi para a seção "Sobre".
* `portfolio-1.jpg` até `portfolio-6.jpg`: Fotos dos casamentos para a galeria do portfólio.

*Dica:* Utilize imagens em formato `.jpg` ou `.jpeg`, preferencialmente com boa iluminação e otimizadas para a web.

---

### 2. WHATSAPP
1. Abra o arquivo `EditionPanel/config.ts`.
2. Altere o valor de `whatsapp` para o seu número com código do país e DDD (exemplo: `"5561999999999"`).
3. Se desejar, ajuste também a mensagem padrão em `whatsappMessage`.
4. Salve o arquivo. Todos os botões do site atualizarão automaticamente!

---

### 3. INSTAGRAM E CONTATOS
1. Abra o arquivo `EditionPanel/config.ts`.
2. Altere `instagram` com o link do seu perfil (exemplo: `"https://instagram.com/seuperfil"`).
3. Altere `email` e `location` conforme desejar.
4. Salve o arquivo.

---

### 4. TEXTOS
1. Abra o arquivo `EditionPanel/content.ts`.
2. Encontre a seção que deseja alterar (Hero, Sobre, Serviços, Portfólio, Diferenciais ou Contato).
3. Mude as palavras dentro das aspas (`" "`).
4. Salve o arquivo e o site atualizará na hora.

---

### 5. PUBLICAÇÃO (Como manter ou remover o EditionPanel)
* **Manter o EditionPanel (Recomendado e mais fácil):**
  Você **não** precisa remover esta pasta se não quiser! O projeto já foi configurado para gerar a versão final para produção mantendo toda essa estrutura funcionando perfeitamente.

* **Se desejar remover a pasta EditionPanel antes da publicação final:**
  1. Mova a pasta `fotos/` para dentro de `public/` ou `src/assets/`.
  2. Mova os arquivos `config.ts` e `content.ts` para dentro da pasta `src/data/`.
  3. No arquivo `src/siteData.ts`, atualize o caminho de importação para apontar para `./data/config` e `./data/content`.
  4. Pronto! O site continuará 100% intacto.
