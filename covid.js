function fetchResults()
{
    var request=new XMLHttpRequest();
    const country=document.getElementById("country").value;
    var url=`https://api.covid19api.com/live/country/${country}`;
    request.open('GET',url,true);
    request.send();
    table=document.createElement("TABLE");
    request.onload=function()
    {
        
        table.border="1"
        row1=table.insertRow(-1);
        cell1=row1.insertCell(-1);
        cell2=row1.insertCell(-1);
        cell3=row1.insertCell(-1);
        cell4=row1.insertCell(-1);
        cell1.innerHTML="Date";
        cell2.innerHTML="Active cases";
        cell3.innerHTML="Deaths";
        cell4.innerHTML="Recovered";
        res=JSON.parse(this.response);

        res.forEach(day=>
        {
            row1=table.insertRow(-1);
            c1=row1.insertCell(-1);
            c2=row1.insertCell(-1);
            c3=row1.insertCell(-1);
            c4=row1.insertCell(-1);
            c1.innerHTML=day.Date;
            c2.innerHTML=day.Active;
            c3.innerHTML=day.Deaths;
            c4.innerHTML=day.Recovered;
        })
    }
    div1=document.getElementById("division");
    div1.append(table);
    
}