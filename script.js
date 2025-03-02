

         const btn=document.querySelector("button");

  btn.addEventListener("click",function(e){

               let na=document.getElementById("name").value;     //get values from fields
               let da=document.getElementById("date").value;
               let am=document.getElementById("amount").value;

                         const table=document.querySelector("table");
               
               

                 let row=document.createElement("tr");         

                 let first=document.createElement("td");
                 let sec=document.createElement("td");
                 let third=document.createElement("td");

                 let cancel=document.createElement("button")    //create delete btn

                 cancel.addEventListener("click",function(e){   //for delete expense
                     row.remove();
                 })
                 cancel.innerHTML="del";


                 first.innerHTML=na;
                 sec.innerHTML=da;
                 third.innerHTML=am;

                 table.appendChild(row);    //showing complete row

                 row.appendChild(first);
                 row.appendChild(sec);
                 row.appendChild(third);

                 row.appendChild(cancel);

         })