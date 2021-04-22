function GitHubFunc()
{
  var request=new XMLHttpRequest();
  let username =document.getElementById("username").value;
  console.log(username);
  let url = `https://api.github.com/users/${username}/repos`;
  request.open("GET",url,true)
  request.send();
  let table=document.createElement("TABLE")
  request.onload=function()
 {
    table.border=1
    let row=table.insertRow(-1);
    let sno=row.insertCell(-1);
    let username=row.insertCell(-1);
    let repository=row.insertCell(-1);
    let date=row.insertCell(-1);
    let desc=row.insertCell(-1);
    username.innerHTML = "Username";
    repository.innerHTML = "Repository";
      desc.innerHTML="Description";
      sno.innerHTML = "S.No";
      date.innerHTML="Date&Time Of creation";
      let result = JSON.parse(this.response);
      result.forEach(day=>{
          console.log(day);
          let row=table.insertRow(-1);
          let sno=row.insertCell(-1);
          let username=row.insertCell(-1);
          let repository=row.insertCell(-1);
          let date=row.insertCell(-1);
          let desc=row.insertCell(-1);
          sno.innerHTML = result.indexOf(day)+1;
          username.innerHTML=day.owner.login;
         repository.innerHTML=day.name;
         date.innerHTML=day.created_at;
         desc.innerHTML=day.description;
      })
 }
  dispTable = document.getElementById("division");
  dispTable.append(table);
}