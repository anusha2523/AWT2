function fetchWeather()
{
    var table=document.createElement("TABLE");
    table.border="1";
    var apiKey='841e38e30da2585b8ec4bbf617dcc99e';
    var city=document.getElementById("city").value;
    var unit='metric';
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
    fetch(url)
        .then(function(response) { return response.json() }) 
        .then(function(data) {
            row=table.insertRow(-1)
            c1=row.insertCell(-1)
            c2=row.insertCell(-1)
            c3=row.insertCell(-1)
            c1.innerHTML="DATE"
            c2.innerHTML="MIN(in celsius)"
            c3.innerHTML="MAX(in celsius)"
            data.list.forEach((day)=>{
                row1=table.insertRow(-1);
                cell1=row1.insertCell(-1)
                cell2=row1.insertCell(-1)
                cell3=row1.insertCell(-1)
                cell1.innerHTML=day.dt_txt
                cell2.innerHTML=day.main.temp_min
                cell3.innerHTML=day.main.temp_min
            })
            var div=document.getElementById("table");
            div.append(table);
        })
        .catch(function(err) {
            console.log(err);
        });
}