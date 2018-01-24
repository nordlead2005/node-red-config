// name: extract files and set filename parameter
// outputs: 1
var returnMsgs = [];
for(i = 0; i < msg.payload.length; i++)
{
    var newMsg = {filename: msg.payload[i],
                  gitPath: msg.payload[i].replace("/home/hass/.node-red/", "")};
    returnMsgs.push(newMsg);
}
return [returnMsgs];