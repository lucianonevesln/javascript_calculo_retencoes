// funcao para calcular e retornar salario, inss, irrf e salario liquido
function calcularRetencoes ()
{

    // declaracao de variaveis
    let nome = document.getElementById('nome').value;
    let salarioBruto = Number(document.getElementById('salarioBruto').value);
    let inss = 0.00;
    let irrf = 0.00;

    // calculo de inss
    switch (true)
    {
        case salarioBruto <= 1302.00:
            inss = salarioBruto * 0.075;
            salarioInss = salarioBruto - (salarioBruto * 0.075);
            break;
        case salarioBruto > 1302.00 && salarioBruto <= 2571.29:
            inss = salarioBruto * 0.09 - 19.53;
            salarioInss = salarioBruto - (salarioBruto * 0.09 - 19.53);
            break;
        case salarioBruto > 2571.29 && salarioBruto <= 3856.94:
            inss = salarioBruto * 0.12 - 96.67;
            salarioInss = salarioBruto - (salarioBruto * 0.12 - 96.67);
            break;
        case salarioBruto > 3856.94 && salarioBruto <= 7507.49:
            inss = salarioBruto * 0.14 - 173.81;
            salarioInss = salarioBruto - (salarioBruto * 0.14 - 173.81);
            break;
        case salarioBruto > 7507.49:
            inss = 877.24;
            salarioInss = salarioBruto - 877.24;
            break;
    };

    // calculo de irrf
    switch (true)
    {
        case salarioInss <= 1903.98:
            salarioIrrf = salarioInss;
            break;
        case salarioInss > 1903.98 && salarioInss <= 2826.65:
            irrf = salarioInss * 0.075 - 142.80;
            salarioIrrf = salarioInss * 0.075 - 142.80;
            break;
        case salarioInss > 2826.65 && salarioInss <= 3751.05:
            irrf = salarioInss * 0.15 - 354.80;
            salarioIrrf = salarioInss * 0.15 - 354.80;
            break;
        case salarioInss > 3751.05 && salarioInss <= 4664.68:
            irrf = salarioInss * 0.225 - 636.13;
            salarioIrrf = salarioInss * 0.225 - 636.13;
            break;
        case salarioInss > 4664.68:
            irrf = salarioInss * 0.275 - 869.36;
            salarioIrrf = salarioInss * 0.275 - 869.36;
            break;
    };

    // retorno das informacoes de salario bruto, inss e ir retidos, salario liquido, total de descontos e botao para retorno
    document.write('<h1>----------------------------------</h1>');
    document.write("Olá " + nome + ", veja as informações de seu salário: <br><br>");
    document.write("Salário Bruto: " + parseFloat(salarioBruto).toFixed(2) + "<br><br>");
    document.write("(-) INSS: " + parseFloat(inss).toFixed(2) + "<br><br>");
    document.write("(-) IRRF: " + parseFloat(irrf).toFixed(2) + "<br><br>");
    document.write("(-) Total de Descontos: " + parseFloat(inss + irrf).toFixed(2) + "<br><br>");
    document.write("Salário Líquido: " + parseFloat(salarioBruto - inss - irrf).toFixed(2) + "<br><br>");
    document.write('<a href="index.html"><button type="button">Voltar</button></a>');
    document.write('<h1>----------------------------------</h1>');

};