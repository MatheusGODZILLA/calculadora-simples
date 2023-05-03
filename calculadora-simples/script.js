// seleciona o formulário e adiciona um ouvinte de evento para quando ele for enviado
document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o formulário de ser enviado e a página ser recarregada
  
    // função que será chamada quando o formulário for enviado
    function calcular() {
      // obtém os valores dos campos num1 e num2
      let a = Number(document.getElementById("num1").value);
      let b = Number(document.getElementById("num2").value);
  
      // obtém a operação selecionada no campo operacao
      let escolha = Number(document.getElementById("operacao").value);
  
      // realiza o cálculo com base na escolha do usuário
      let resultado;
      switch (escolha) {
        case 1:
          resultado = a + b;
          break;
        case 2:
          resultado = a - b;
          break;
        case 3:
          resultado = a * b;
          break;
        case 4:
          resultado = a / b;
          break;
        default:
          resultado = "Opção inválida!";
      }
      document.getElementById("resultado").style.display = "block";
  
  
      // exibe o resultado na página
      document.getElementById("valor").textContent = resultado;
    }
  
    // chama a função para realizar o cálculo
    calcular();
  });