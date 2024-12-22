function calculate() {

    let amount = prompt("Nhap so tien vay:");

    let rate = prompt("Lai suat (%):");

    let months = prompt("So thang vay:");
	
	// Calculating interest per month
	const interest = (amount * (rate * 0.01)) / months;
	
	// Calculating total payment
	const total = ((amount / months) + interest).toFixed(2);

	alert("So tien phai tra hang thang: " + total);
}