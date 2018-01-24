// name: dT minutes
// outputs: 1
var t1 = Date.parse(msg.data.old_state.last_changed);
var t2 = Date.parse(msg.data.new_state.last_changed);

//time delta in minutes
var delta = ((t2-t1)/1000.0)/60.0;
msg.dT = delta;
return msg;