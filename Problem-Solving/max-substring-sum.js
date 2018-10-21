function max_substring_sum(list) {
	let ans = Number.NEGATIVE_INFINITY
	let sum = 0 
	for (var i = 0; i < list.length; i++){
		sum += list[i]
		ans = Math.max(ans, sum)
		sum = Math.max(0, sum)
	}
	return ans
}


console.log(max_substring_sum([-2, -3, 4, -1, -2, 1, 5,-3]))
