

window.addEventListener("load", () => {
    
    function loadData(baseCurrencyCode) {        
    
        const API_KEY = "0e91a8a4dcdf10767448d64d";
        const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrencyCode}`;

        fetch(URL)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed. Status:', response.status);
                }
            })
            .then(function ({conversion_rates}) {
                // Process the response data
                renderRate({conversion_rates});
            
            })
            .catch(function (error) {
                console.log('Request failed. Error:', error.message);
            });

    }    


    function create_option_elements(options_class) {
        let currency_codes = [
            "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"
        ]   
        
        currency_codes.forEach(code => {
            let option = document.createElement("option"); 
            option.append(code);
            document.querySelector(options_class).append(option);
        });
    
    }

    create_option_elements('.to_currency_select');
    create_option_elements('.from_currency_select');


    document.querySelector('.from_currency_select').addEventListener('change',(e)=> {
        loadData(e.target.value);

    });


    function renderRate(conversion_rates_array) {
        document.querySelector('.to_currency_select').addEventListener('change',(e)=> {
            console.log(conversion_rates_array.conversion_rates[e.target.value]);
            document.querySelector('.rate').innerText = `${conversion_rates_array.conversion_rates[e.target.value]}`;
            document.querySelector('.code').innerText = `${e.target.value}`;
        });

    }

});