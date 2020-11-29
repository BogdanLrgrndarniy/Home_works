let depositAmount = prompt('введите сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых');

let accruedInterest = Math.round((depositAmount * 5 / 100) * 60 / 365);
alert(`сумму начисленных процентов, ${accruedInterest} гривні`);
