Penjelasan kode:

1. `let SHEET_NAME = "";` - Mendefinisikan variabel global untuk nama sheet yang akan digunakan.

2. `function insertData(dataUpdates)` - Mendefinisikan fungsi utama yang menerima parameter `dataUpdates` (objek yang berisi data yang akan dimasukkan/diperbarui).

3. `const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);` - Mendapatkan referensi ke sheet yang aktif berdasarkan `SHEET_NAME`.

4. `const dataSheet = getDataSheet(SHEET_NAME);` - Mengambil data dari sheet (diasumsikan ada fungsi `getDataSheet` yang mengembalikan array objek).

5. `const keys = dataSheet.length ? Object.keys(dataSheet[0]) : [];` - Mendapatkan nama-nama kolom dari baris pertama data, jika ada.

6. `const rowIndex = dataSheet.findIndex(...) + 2;` - Mencari indeks baris yang cocok dengan `id` dari `dataUpdates`, ditambah 2 (karena indeks dimulai dari 0 dan header biasanya di baris pertama).

7. Jika `rowIndex > 1` (data ditemukan):
   - Melakukan iterasi pada `dataUpdates` menggunakan `Object.entries()`.
   - Untuk setiap pasangan key-value, mencari indeks kolom yang sesuai.
   - Jika kolom ditemukan, memperbarui nilai sel yang sesuai.

8. Jika `rowIndex <= 1` (data tidak ditemukan):
   - Menambahkan baris baru dengan nilai-nilai dari `dataUpdates`.

9. `return dataUpdates;` - Mengembalikan objek `dataUpdates` yang telah diproses.

Contoh penggunaan:

```javascript
// Atur nama sheet
SHEET_NAME = "Data Produk";

// Contoh data untuk dimasukkan/diperbarui
const newData = {
  id: "P001",
  symbol: "APPL",
  name: "Apple Inc.",
  price: 150.25,
  quantity: 100
};

// Memanggil fungsi
const result = insertData(newData);
console.log(result);
```

Dalam contoh ini:

1. Kita mengatur `SHEET_NAME` ke "Data Produk".
2. Kita membuat objek `newData` pastikan `key === header sheet` yang berisi informasi produk.
3. Kita memanggil `insertData(newData)` untuk memasukkan atau memperbarui data.
4. Hasil operasi dicetak ke console.

Fungsi ini efisien dan efektif karena:

1. Menggunakan `findIndex()` untuk mencari data yang cocok, yang lebih cepat daripada loop manual.
2. Hanya memperbarui sel-sel yang perlu diubah, bukan seluruh baris.
3. Dapat menangani baik pembaruan data yang ada maupun penambahan data baru.
4. Menggunakan `Object.entries()` untuk iterasi yang lebih bersih dan efisien pada objek.

Fungsi ini akan mencari baris berdasarkan `id`. Jika ditemukan, akan memperbarui nilai-nilai yang ada. Jika tidak ditemukan, akan menambahkan baris baru dengan data tersebut.
