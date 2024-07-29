document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    const notebooks = document.getElementById('notebook').value;
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=notebooks`;

    for{
        const title1 = "Notebook Gamer Acer Predator Intel Core I7 13650hx 16gb Ram 1tb Ssd Nvidia Geforce Rtx 4060 Windows11 Home Tela 16 Phn16-71-709k Preto";
        fetch (url)
        then (response => response.json())
        then (data => {
            document.getElementById('id').textContent = title1;
        })
    }