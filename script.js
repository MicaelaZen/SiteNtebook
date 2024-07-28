document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    const notebook = document.getElementById('notebook').value;
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=notebooks`;
  