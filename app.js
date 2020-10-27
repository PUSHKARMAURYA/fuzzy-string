function regex(text){
	
	 const regext = new RegExp(text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'gi');
	return regext;
}


module.exports.regex=regex;