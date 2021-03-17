function getMinMax(str) {
  let result = str
	.split(',').join(' ').split(' ')
	.filter((item) => isFinite(item))
	.map((item)=> Number(item));
	
	let min = Math.min(...result);
	let max = Math.max(...result);
	
	return {min, max};
}