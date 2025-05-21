const startDate = new Date('2022-03-23T22:15:27');

    function updateCounter() {
      const now = new Date();
      let diff = Math.abs(now - startDate);

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff %= 1000 * 60 * 60 * 24 * 365;

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      diff %= 1000 * 60 * 60 * 24 * 30;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff %= 1000 * 60 * 60 * 24;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff %= 1000 * 60 * 60;

      const minutes = Math.floor(diff / (1000 * 60));
      diff %= 1000 * 60;

      const seconds = Math.floor(diff / 1000);

      const display = `
        ${years} Anos 
        ${months} Meses
        ${days} Dias 
        ${hours} Horas 
        ${minutes} Minutos 
        ${seconds} Segundos
      `;

      document.getElementById('time-display').innerText = display;
    }

    setInterval(updateCounter, 1000);