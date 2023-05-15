/**
 * This is a Checking account in the bank. You have an
 * [amount] which you can either [withdraw] from or
 * [deposit] into.
 *
 * And also, for debugging purposes, you can print out its
 * amount at any time.
 *
 *
 * @param amount it's the only field of the class.
 *
 */
export function CheckingAccount(amount) {

    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;

    function deposit(amount) {
        this.balance += amount;
    }

    function withdraw(withdrawAmount) {
        if (withdrawAmount > this.balance) {
            console.log("Insufficient funds");
            return
        }
        if (withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
        }

    }

    function toString() {
        return "Balance: " + this.balance;
    }
}