function personAccount(firstName, lastName) {
    var firstName = firstName;
    var lastName = lastName;
    var incomes = [];
    var expenses = [];
  
    function totalIncome() {
      var total = 0;
      for (var i = 0; i < incomes.length; i++) {
        total += incomes[i].amount;
      }
      return total;
    }
  
    function totalExpense() {
      var total = 0;
      for (var i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
      }
      return total;
    }
  
    function accountInfo() {
      return 'Account Information\nName: ' + firstName + ' ' + lastName +
        '\nTotal Income: ' + totalIncome() +
        '\nTotal Expense: ' + totalExpense() +
        '\nAccount Balance: ' + accountBalance();
    }
  
    function addIncome(amount, description) {
      incomes.push({ amount: amount, description: description });
    }
  
    function addExpense(amount, description) {
      expenses.push({ amount: amount, description: description });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      accountInfo: accountInfo,
      addIncome: addIncome,
      addExpense: addExpense
    };
  }
  
  var myAccount = personAccount('John', 'Doe');
  myAccount.addIncome(2000, 'Salary');
  myAccount.addExpense(500, 'Rent');
  myAccount.addExpense(200, 'Groceries');
  
  console.log(myAccount.accountInfo());
  