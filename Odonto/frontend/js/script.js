

// Dados fictícios da tabela - Substituir pelos dados reais depois
const valores = [
    { data: "01-12-2023", procedimento: "Limpeza", valor: 150.00, mes: "12" },
    { data: "05-12-2023", procedimento: "Restauração", valor: 300.00, mes: "12" },
    { data: "10-12-2023", procedimento: "Extração", valor: 200.00, mes: "12" },
    { data: "01-01-2024", procedimento: "Limpeza", valor: 100.00, mes: "01" },
    { data: "01-01-2024", procedimento: "Limpeza", valor: 200.00, mes: "01" },
    { data: "01-01-2024", procedimento: "Restauração", valor: 250.00, mes: "01" },
    // ...
  ];
  
  // Seletores
  const tabelaValores = document.getElementById('tabela-valores');
  const tbody = tabelaValores.querySelector('tbody');
  const totalMensal = document.getElementById('total-mensal');
  const mesSelect = document.getElementById('mes-select');
  const tabelaAnual = document.getElementById('tabela-anual');
  const tbodyAnual = tabelaAnual.querySelector('tbody');
  const totalAnual = document.getElementById('total-anual');
  const mensalLink = document.getElementById('mensal-link');
  const anualLink = document.getElementById('anual-link');
  const tituloMensal = document.getElementById('titulo-mensal');
  const tituloAnual = document.getElementById('titulo-anual');
  
  // Event listeners
  mesSelect.addEventListener('change', () => {
    const mesSelecionado = mesSelect.value;
    tbody.innerHTML = '';
    let somaMensal = 0;
    valores.forEach(valor => {
      if (valor.mes === mesSelecionado) {
        const row = tbody.insertRow();
        const dataCell = row.insertCell();
        const procedimentoCell = row.insertCell();
        const valorCell = row.insertCell();
  
        dataCell.textContent = valor.data;
        procedimentoCell.textContent = valor.procedimento;
        valorCell.textContent = `R$ ${valor.valor.toFixed(2)}`;
        somaMensal += valor.valor;
      }
    });
    totalMensal.textContent = `R$ ${somaMensal.toFixed(2)}`;
  });
  
  mensalLink.addEventListener('click', () => {
    tabelaValores.style.display = 'table';
    tabelaAnual.style.display = 'none';
    mesSelect.style.display = 'inline-block';
    tituloMensal.style.display = 'block';
    tituloAnual.style.display = 'none';
  });
  
  anualLink.addEventListener('click', () => {
    tabelaValores.style.display = 'none';
    tabelaAnual.style.display = 'table';
    mesSelect.style.display = 'none';
    tituloMensal.style.display = 'none';
    tituloAnual.style.display = 'block';
  });
  
  // Calcular o resultado anual
  const resultadoAnual = {};
  valores.forEach(valor => {
    if (!resultadoAnual[valor.mes]) {
      resultadoAnual[valor.mes] = 0;
    }
    resultadoAnual[valor.mes] += valor.valor;
  });
  
  let somaAnual = 0;
  Object.keys(resultadoAnual).forEach(mes => {
    const row = tbodyAnual.insertRow();
    const mesCell = row.insertCell();
    const valorCell = row.insertCell();
  
    mesCell.textContent = mes;
    valorCell.textContent = `R$ ${resultadoAnual[mes].toFixed(2)}`;
    somaAnual += resultadoAnual[mes];
  });
  totalAnual.textContent = `R$ ${somaAnual.toFixed(2)}`;
  