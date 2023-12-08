function result(num) {
    var result = document.getElementById('result')
    result.value += num
}
function Clear() {
    var result = document.getElementById('result');
    result.value = " ";
}
function finalResult() {
    var result = document.getElementById('result')
    result.value = eval(result.value)
}