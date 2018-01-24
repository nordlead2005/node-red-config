// name: Format Notification
// outputs: 2
var notification = {};
var turn_off_notification = null;

var traveler = "Seth";
var destination = "Christy";
var phone = "christys_lg_g2";
var message = "";
var title = "";
if(msg.topic.endsWith("seth"))
{
    phone = "seths_one_plus_3t";
    traveler = "Christy";
    destination = "Seth";
}
if(Number(msg.payload) < 3)
{
    title = traveler+" is here.";
    message = "Travel time is 2 minutes or less.";
    var entity_id = "input_boolean.notify_travel_time_"+traveler.toLowerCase()+"_to_"+destination.toLowerCase();
    turn_off_notification = {payload: {"data":{"entity_id": entity_id}}};
}
else
{
    title = traveler+" will be here in "+msg.payload+" minutes.";
    message = "Estimated travel time.";
}
var tag = traveler+"_to_"+destination;
notification = {payload: {"data": {"target": phone, "title": title, "message": message, "data":{"tag":tag}}}};

return [notification, turn_off_notification];