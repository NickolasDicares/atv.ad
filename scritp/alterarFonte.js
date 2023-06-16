//Alterar tamanho das letras (Fontes)
function alterarFonte(e)
{
    var elemento = $(".acessibilidade");
    var fonte =  parseInt(elemento.css('font-size'));

    var body = $("body");
    const fonteNormal = parseInt(body.css('font-size'));

    if(e == 'a')
    {
        fonte++;
    }
    
    if(e == 'd')
    {
        fonte--;
    }

    if(e == 'n')
    {
        fonte = fonteNormal;
    }
    elemento.css("font-size", fonte);
}

// Função para alternar entre o tema padrão e o tema de contraste
function toggleContrast() {
    document.body.classList.toggle("contrast");
}