// Function to Display Current Date & Time 
function updateDateTime() { 
    document.getElementById("dateTime").innerText = new Date().toLocaleString(); 
    }    
 
    // Validate Username (Only Letters Allowed) 
    document.getElementById("username").addEventListener("input", function() { 
    this.value = this.value.replace(/[^a-zA-Z\s]/g, ""); 
    }); 
 
    // Validate KSH Input (Only Numbers, Max 6 Digits) 
    document.getElementById("ksh").addEventListener("input", function() { 
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 6); 
    }); 
 
    // Convert KSH to USD 
    function convertCurrency() { 
    let kshValue = document.getElementById("ksh").value; 
    if (kshValue) { 
    let usdValue = (parseFloat(kshValue) / 120).toFixed(2); 
    document.getElementById("result").value = usdValue + " USD"; 
    alert("Converted amount: " + usdValue + " USD"); 
} else { 
    alert("Please enter a valid amount in KSH."); 
} 
} 
 
// Open Exchange Rates Link 
function viewRates() { 
window.open("https://www.centralbank.go.ke/rates/forex-exchange-rates/", 
"_blank"); 
} 
 
// Print Page 
function printPage() { 
window.print(); 
} 
 
// Close Window 
function closeWindow() { 
window.close(); 
}