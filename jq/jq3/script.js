function required() {
    var empt = document.form.text1.value;
    var emp = document.form.text2.value;
    if (empt === "" && emp === "") {
        alert("Please fill all the fields");
    }
}