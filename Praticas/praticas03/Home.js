
function InputSearch () {
    const input = document.createElement ("input");
    input.setAttribute ("type", "search");
    input.setAttribute ("placeholder", "Pesquisar...");
    return input;
}

function Cabeçalho() {
    const logo = Icone (
        "https://www.svgrepo.com/show/411955/learn.svg",
        "Logo da Aplicação"
    );
    const titulo = Titulo ("Aluno Online");
    const grupo1 = document.createElement ("div");
    grupo1.append (logo, titulo);
    const input = InputSearch ();
    const icone = Icone (
        "https://www.svgrepo.com/show/507851/search-square.svg",
        "Ícone de Pesquisar"
    );
    const grupo2 = document.createElement ("div");
    grupo2.append (input, icone);
    const header = document.createElement ("header");
    header.append (grupo1, grupo2);
    return header;
}

function onClickMenu (event) {
    event.preventDefault();
    Navega (event.target.getAttribute ("href"));
}

function Menu() {
    const opcoes = [
        {rota: "/home", titulo: "home"},
        {rota: "/perfil", titulo: "perfil"},
        {rota: "/login", titulo: "Sair"},
    ];
    const lista = document.createElement ("ul");
    opcoes.forEach ((opcao) => {
        const link = Link (opcao.rota, opcao.titulo);
        link.addEventListener ("click", onClickMenu);
        const item = document.createElement ("li");
        item.append (link);
        lista.append (item);
    });
    const nav = document.createElement ("nav");
    nav.append (lista);
    return nav;
}

function Subtitulo (text){
    const h2 = document.createElement ("h2");
    h2.innerText = texto;
    return h2;
}

function Painel (nome) {
    const titulo = document.createElement ("h3");
    titulo.innerText = nome;
    const lista = document.createElement ("ul");
    const painel = document.createElement ("article");
    painel.append (titulo, lista);
    return painel;
}

function Secao (nome, conteudo) {
    const titulo = subtitulo (nome);
    const section = document.createElement ("section");
    section.append (titulo, conteudo);
    return section;
}

function PageHome () {
    const menu = Menu ();
    const grupo = document.createElement ("div");
    const itens = [
        "Mural de Avisos",
        "Agenda AcadÊmica",
        "Histórico de Notas",
        "Histórico de Faltas",
    ];
    itens.forEach ((item) => grupo.append (Painel (item)));
    const secao = Secao ("Página Inicial", grupo);
    const conteudo = Conteudo (menu, secao);
    const cabecalho = Cabecalho ();
    root.append (cabecalho, conteudo);
    document.title = "Home - Aluno Online";
}