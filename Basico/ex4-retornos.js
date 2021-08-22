function somar(n1=0, n2=0)
{
    return `${n1} + ${n2} = ${n1+n2}`;
}

function parimp(n=0)
{
    if (n%2 == 0)
    {
        return `${n} é par!`;
    }
    else
    {
        return `${n} é ímpar!`;
    }
}

window.alert(somar(5,20)); 
// Chamada(alert) + ação(somar) + valor de entrada(5,20) = return da função(25)
// O 'alert' está chamando a ação(função) 'somar' com os valores de entrada '5 e 20' para a função 'somar retornar o valor no alert (25)

window.alert(parimp(9));
// Chamada(alert) + ação(parimp) + valor de entrada(9) = return da função(ímpar)