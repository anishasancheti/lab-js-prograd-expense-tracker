let storeData = (key,val) => {
    localStorage.setItem(key,val);
}

let updateData = (val) => {
    if (val.charAt(0) == '-') {
        let expense = parseFloat(localStorage.getItem('expense'));
        let balance = parseFloat(localStorage.getItem('balance'));
        let floatVal = parseFloat(val.substring(1,(val.length)));
        let e = expense + floatVal;
        let b = balance - floatVal;
        localStorage.setItem('expense',e);
        localStorage.setItem('balance',b);
    } else {
        let income = parseFloat(localStorage.getItem('income'));
        let balance = parseFloat(localStorage.getItem('balance'));
        let floatVal = parseFloat(val);
        let i = income + floatVal;
        let b = balance + floatVal;
        localStorage.setItem('income',i);
        localStorage.setItem('balance',b);
    }
}

let displayData = (key,val) => {
    let balanceVal = localStorage.getItem('balance');
    document.querySelector('#balance').innerHTML = balanceVal;
    let incomeVal = localStorage.getItem('income');
    document.querySelector('#money-plus').innerHTML = incomeVal;
    let expenseVal = localStorage.getItem('expense');
    document.querySelector('#money-minus').innerHTML = expenseVal;
    if (val.charAt(0) == '-') {
        let newItem = document.createElement('li');
        newItem.textContent = key+Array(50).fill('\xa0').join('')+ val;
        newItem.className = 'minus';
        document.querySelector('#list').append(newItem)
    } else {
        let newItem = document.createElement('li');

        newItem.textContent = key+Array(50).fill('\xa0').join('')+'+'+val;
        newItem.className = 'plus';
        document.querySelector('#list').append(newItem);
    }
}

function dataDetails() {
    let key = document.querySelector('#text').value;
    let val = document.querySelector('#amount').value;
    storeData(key,val);
    updateData(val);
    displayData(key,val);
}

window.onload = () => {
    localStorage.clear();
    localStorage.setItem('balance',0);
    localStorage.setItem('income',0);
    localStorage.setItem('expense',0);
};



