//construct
function TextInput(domId){
	//if($(domId)[0] == undefined) throw 'Component not found in View!';
	this.input = $(domId);
}
//heritage
TextInput.prototype = Object.create(Component.prototype);
$TextInput = TextInput.prototype;
//methods
$TextInput.setValue = function(value) {
	this.input.val(value);
}
$TextInput.getValue = function() {
	return this.input.val();
}
$TextInput.isValid = function() {
	if(this.input.val() == '') {
		this.log = 'Field is empty';
		return false;
	}
	return true;
}
$TextInput.clear = function(callback) {
	this.input.val('');
	if(this.input[0].nodeName == 'SELECT') this.input[0].options.selectedIndex = 0;
	callback ? callback() : null;
}
