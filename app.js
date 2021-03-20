


    fetch('http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&amp;currencySymbol=$&amp;BrandID=0')
.then((res) => res.text())
.then((data) => {
    document.getElementById('api-data').innerHTML = data;
})


