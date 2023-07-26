// Tolong buat satu array / list dari 1 sampai 100. Print semua angka ini dalam urutan terbalik, tetapi ada beberapa peraturan : 

// 1. Jangan print angka bilangan prima.
// 2. Ganti angka yang dapat dibagi dengan angka 3 dengan text "Foo".
// 3. Ganti angka yang dapat dibagi dengan angka 5 dengan text "Bar".
// 4. Ganti angka yang dapat dibagi dengan angka 3 dan 5 dengan text "FooBar".
// 5. Print angka menyamping tidak kebawah.

let results = []

for (let index = 100; index >= 1; index--) {
    if (checkPrima(index)) continue;

    if (index % 3 === 0 && index % 5 === 0) {
        results.push("FooBar");
    } else if (index % 3 === 0 ) {
        results.push("Foo");
    } else if (index % 5 === 0) {
        results.push("Bar");
    } else {
        results.push(index)
    }
}

console.log(results.join(', '))

function checkPrima(number)  {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
} 