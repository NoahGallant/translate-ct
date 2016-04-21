var CodeExceptions = [];

function execute(commands){
	var executions = commands.split("\n");
	var holders = [];
	for(var j = 0; j < executions.length; j++){
		var e = executions[j];
		console.log(holders);
		if(e.indexOf(" = ")>0 && e.indexOf("with")<0){
			var components = e.split(" = ");
			var variable_name = components[0];
			var lhsComponents = components[1].split(" ");
			var variable_number = lhsComponents[0];
			var variable_type = lhsComponents[1];
			if (variable_number == "a" || variable_number == "an"){
				variable_number = 1;
			}
			else if (parseInt(variable_number) != NaN) {
				variable_number = parseInt(variable_number);
			}
			else{
				CodeExceptions[CodeException.length] = "[Line "+(j+1)+"] Please use syntax: name = # type";
				return CodeExceptions;
			}
			var json = {
				"name": variable_name,
				"type": variable_type,
				"number": parseInt(variable_number),
				"actions": [],
				"contents": []
			};
			holders.push(json);
		}
		else if(e.indexOf("with")>0){
			var components = e.split(" = ");
			var variable_name = components[0];
			var lhsComponents = components[1].split(" ");
			var action = lhsComponents[0];
			var utensil = lhsComponents[lhsComponents.length-1];
			if(components[1].indexOf(",")>0){
				var length = lhsComponents.length;
				var parameters = [];
				ind = 1;
				for(ind; ind < length-2; ind++){
					var index = holders.length;
					var parameter_name = lhsComponents[ind].replace(",", "");
					for(var i = 0; i < holders.length; i++){
						if(holders[i]["name"].valueOf() == parameter_name.valueOf()){
							index = i;
						}
					}
					if(index != holders.length){
						var parameter = holders[i];
					}
					else{
						CodeExceptions[CodeExceptions.length] = "[Line "+(j+1)+"] Assign each variable before using it in a function.";
						return CodeExceptions;
					}
					var parameter = holders[index];
					var prop = {"a": action, "u": utensil};
					parameter.actions[parameter.actions.length]=prop;
					apply(parameter.contents, prop);
					parameters[parameters.length] = parameter;
				}
				var json = {
					"name": variable_name,
					"type": action,
					"number": 1,
					"actions": [],
					"contents": []
				};
				for(k = 0; k<parameters.length; k++){
					json.contents.push(parameters[k]);
				}
				holders.push(json);
			}
			else{
				var index = holders.length;
				var action = lhsComponents[0];
				var parameter_name = lhsComponents[1];
				var utensil = lhsComponents[lhsComponents.length-1];
				for(var i = 0; i < holders.length; i++){
					if(holders[i]["name"].valueOf() == parameter_name.valueOf()){
						index = i;
					}
				}
				if(index != holders.length){
					var parameter = holders[i];
				}
				else{
					CodeExceptions[CodeExceptions.length] = "[Line "+(j+1)+"] Assign each variable before using it in a function.";
					return CodeExceptions;
				}
				var parameter = holders[index];
				var prop = {"a": action, "u": utensil};
				parameter.actions[parameter.actions.length]=prop;
				apply(parameter.contents, prop);
				var json = {
					"name": variable_name,
					"type": action,
					"number": 1,
					"actions": [],
					"contents": [ parameter ]
				};
				holders.push(json);
			}
		}
		else if(e.indexOf("present(")>=0){
			var components = e.replace(")", "").split("(");
			var index = holders.length;
			for(var i = 0; i < holders.length; i++){
				if(holders[i]["name"] === components[1]){
					index = i;
				}
			}
			console.log(holders);
			return holders[index];
		}
	}
}
function apply(c, a){
	for (i = 0; i < c.length; i++){
		c[i].actions[c[i].actions.length] = a;
		apply(c[i].contents);
	}
}

function compare(a, b){
	return prove(a, b, true, false) && prove(a, b, true, false);
}

function prove(a, b, found, deep){
	var a1 = [];
	var a2 = [];
	var b1 = [];
	var b2 = [];
	ac = a.contents;
	bc = b.contents;

	for (var u = 0; u < ac.length; u++)
	{
		var value = ac[u];
		a2.push(value);
	}

	for (var u = 0; u < bc.length; u++)
	{
		var value = bc[u];
		b2.push(value);
	}

	var at = a.type
	var bt = b.type

	if(!(at.valueOf() == bt.valueOf())){
		found=false;
	}

	var an = a.number;
	var bn = b.number;

	if(a.number != b.number){
		found=false;
	}

	var ap = a.actions
	var bp = b.actions

	if (!(ap.length == bp.length && containsAll(ap, bp) && containsAll(bp, ap))){
		found = false;
	}

	if(found){
		for(var i = 0; i < a2.length; i++){
			var f = false;
			for(var j = 0; j < b2.length; j++){
				var type = a2[i].type;
				if(type.valueOf() == b2[i].type.valueOf()){
					if(prove(a2[i], b2[j], true, true)){f=true;}
				}
			}
			if(!f){return false;}
		}
		return true;
	}
}

function containsAll(needles, haystack){
	n = needles
	h = haystack
	for(var i = 0 , len = n.length; i < len; i++){
		f = false;
		for(j = 0; j < h.length; j++){
			if(auCheck(n[i], h[j])){f=true;}
		}
		if(!f){return false}
	}
	return true;
}

function auCheck(o1, o2) {
     if(o1.a.valueOf() == o2.a.valueOf() && o1.u.valueOf() == o2.u.valueOf()){
			 return true;
		 }
		 return false;
}
