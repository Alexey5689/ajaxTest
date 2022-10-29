var ao = createAjaxObject();
function createAjaxObject(){
    var ao = null;
    try{
        ao = new XMLHttpRequest();//если новый браузер
    }
    catch(e){
        try{
            ao = new ActiveXObject('Msxm12.XMLHTTP'); //если 
        }
        catch(e){
            try{
                ao = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch(e){
                alert ('AJAX is not supported by your browser');
                return false;
            }
        }
    }
    return ao;
}
// function Process(){
//     //readyState описывает тек состояние объекта ao 
//     if(ao.readyState == 4 || ao.readyState == 0){
//         name = document.getElementById('userText').value;
//         ao.open('GET', "handler.php?name=" + name, true);// создает асинхронные запросы
//         ao.onreadystatechange = getData;//заберет получениы от сервера данные
//         ao.send(null);// тправляет асинхронные запросы серверу

//     }
// }
function Process (){
    if(ao.readyState == 4 || ao.readyState == 0){
        name = document.getElementById('userText').value;
        ao.open('POST', 'handler.php', true);
        ao.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ao.onreadystatechange = getData;
        ao.send('name='+name);
    }
}
// ao.onreadystatechange = function(){
//     if(ao.readyState == 4 && ao.status == 200){
//         resp = ao.responseText;
//         document.getElementById('result').innerHTML = resp;
//     }
// }
function getData(){
         if(ao.readyState == 4 && ao.status == 200){
             resp = ao.responseText;
             document.getElementById('result').innerHTML = resp;
         }
    }