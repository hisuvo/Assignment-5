// Initaial account balance access

const initialAccountBalance =$txtNumber("initial_account_balance");
let ownerBalance = initialAccountBalance;


// NoaKhali Donation part
const noakInitialtBalance = $txtNumber("noakhali_initial_balance");
let noakhaliAccount = noakInitialtBalance ;

$("noakhali_donate_button").addEventListener("click", function() {
    // Get access Noakhali Donation input value
    const inputDonateNoakhali = $vluNumber("noakhali_input_balance");

    if(isNaN(inputDonateNoakhali) || inputDonateNoakhali <= 0) {
        alert("Worng information input")
        return;
    }

    if(ownerBalance < inputDonateNoakhali) {  
        alert("balance is low")
        return;
    }

    // Owner Update Account 
    ownerBalance = ownerBalance - inputDonateNoakhali;

    // NoaKhali donation add here
    noakhaliAccount = noakhaliAccount + inputDonateNoakhali;


    // Display value
    $("noakhali_initial_balance").innerHTML = noakhaliAccount;
    $("initial_account_balance").innerHTML = ownerBalance;

    // Donation add to history
    const div = document.createElement("div")
    div.innerHTML= `
        <div class="space-y-2 md:space-y-4 p-8 border rounded bg-slate-50">
            <h3 class="text-base md:text-xl text-primary font-bold">${inputDonateNoakhali} Taka is Donated for famine-2024 at Nokali, Bangladesh</h3>
            <p class="text-sm md:text-base font-light text-secondary">Date : ${new Date()}</p>
        </div>
    `
    $("history_card_section").appendChild(div);

    //Display input valuse empty
    $empty("noakhali_input_balance")

    // Donate success Modeal
    my_modal_1.showModal();
    
})

// Feni Donation Part
const feniAcount = $txtNumber("feni_acount");
let feniBalance = feniAcount;

$("feni_donate_button").addEventListener("click", function() {

    // get access Feni Donation input value;
    const inputDonateFeni = $vluNumber("feni_input_balance");

    if(isNaN(inputDonateFeni) || inputDonateFeni <=0){
        alert("Invalid Amount");
        return;
    }

    if(ownerBalance < inputDonateFeni) {
        alert("Balance is Low");
        return;
    }

    // Update feni Account balance
    feniBalance  = feniBalance + inputDonateFeni

    // Update owner Account balance
    ownerBalance = ownerBalance - inputDonateFeni;

    // Display 
    $("feni_acount").innerHTML = feniBalance;
    $("initial_account_balance").innerHTML = ownerBalance;

    // Empty input value after count
    $empty("feni_input_balance")

    // Success Modal
    my_modal_1.showModal()
})


// Quota Movement Donation Part
const quotaAcount = $txtNumber("quota_acount")
let quotabalance = quotaAcount;

$("quota_movement_donate_button").addEventListener("click", function () {
    // Get access Quota movement Donate input value
    const inputDonateQuota = $vluNumber("quota_input_balance");

    if(isNaN(inputDonateQuota) || inputDonateQuota <=0) {
        alert("Invalid Amount");
        return;
    }

    if(ownerBalance < inputDonateQuota) {
        alert("Blanace is Low")
        return;
    }

    // Update owner Account Balance
    ownerBalance = ownerBalance - inputDonateQuota

    // Update quota Account Balance
    quotabalance  = quotabalance + inputDonateQuota;

    // display update account balance
    $("initial_account_balance").innerHTML = ownerBalance;
    $("quota_acount").innerHTML = quotabalance;

    // empty input after count
    $empty("quota_input_balance");

    // Success Modal
    my_modal_1.showModal();
})



$("nav_blog_button").addEventListener("click", function () {
    // window.location.replace("/blog.html")
    window.location.href = "/blog.html"
})
