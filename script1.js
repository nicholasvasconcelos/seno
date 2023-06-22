function calcularSeno() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const xMin = document.querySelector('#xMin').value;
  const xMax = document.querySelector('#xMax').value;
  let x = parseFloat(xMin);
  const y = [];
  const labels = [];

  while (x <= parseFloat(xMax)) {
    y.push(Math.sin(x));
    labels.push(x);
    x += 0.1;
  }

  const data = {
    labels,
    datasets: [
      
      {
        data: y,
        label: 'Função Seno',
        borderColor: 'blue',
        fill: false
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
    responsive: true,
    },
  };

  const myChart = new Chart(ctx, config);
}

const botao = document.querySelector('#calcular');
botao.addEventListener('click', function (event) {
  event.preventDefault();
  calcularSeno();
});
