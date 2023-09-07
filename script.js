function fibonacci(num) {
// your code here
	if(num==0 || num==1){
		return 1;
	}
	return num*num-1;
}

module.exports = fibonacci;
