// name: Format HTML
// outputs: 1
payload = msg.payload.replace(/\s\s+/g, ' ').split("\n");

msg.payload = "<table border=1><tr>";

rowSplit = payload[0].split(" ");
for (i = 0; i < rowSplit.length-1; i++)
{
   msg.payload += "<th>"+rowSplit[i]+"</th>";
}
msg.payload += "</tr>";
for (j = 1; j < payload.length; j++)
{
    msg.payload += "<tr>";
    rowSplit = payload[j].split(" ");
    for (i = 0; i < rowSplit.length; i++)
    {
      msg.payload += "<td>"+rowSplit[i]+"</td>";
    }
    msg.payload += "</tr>";
}

//msg.payload = payload[0].split(" ");
return msg;