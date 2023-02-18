window.onload = function () {
	let input = document.getElementById('input');
	let strings = document.getElementsByClassName('string');
	let cells = document.getElementsByClassName('cell');
	let title = document.getElementById('title');

	for (let i = 0; i < 9; i++) {
		cells[i].innerHTML = "___";
	}

	function count(arr, elem) {
		return arr.filter(function(x) {return x == elem}).length
	}

	function valueOfCell(val, count) {
		result = '';
		for (let i = 0; i < count; i++) {
			result += val
		}

		return result
	}

	title.onclick = function() {
		dateOfBirth = input.value;
		DofB_arr = dateOfBirth.split('.');

		for (let i = 0; i < 9; i++) {
			cells[i].innerHTML = "___";
		}

		//первое дополнительное число
		fstExstraNum = 0;
		allNums = dateOfBirth.split("");
		for (var i = 0; i < allNums.length; i++) {
			if (allNums[i] != '.') {
				fstExstraNum += Number(allNums[i]);
			}
		}

		if (String(fstExstraNum).length == 1) {
			fstExstraNum = '0' + String(fstExstraNum);
		} else {
			fstExstraNum = String(fstExstraNum)
		}

		//второе дополнительное число
		sndExstraNum = 0;
		twoNumsSum = String(fstExstraNum).split('')
		for (var i = 0; i < twoNumsSum.length; i++) {
			sndExstraNum += Number(twoNumsSum[i]);
		}

		if (String(sndExstraNum).length == 1) {
			sndExstraNum = '0' + String(sndExstraNum);
		} else {
			sndExstraNum = String(sndExstraNum);
		}

		//третье дополнительное число
		trdExstraNum = fstExstraNum - DofB_arr[0][0] * 2;

		if (String(trdExstraNum).length == 1) {
			trdExstraNum = '0' + String(trdExstraNum);
		} else {
			trdExstraNum = String(trdExstraNum);
		}

		//четвёртое дополнительное число
		frthExstraNum = 0;
		trdExstraNum_arr = String(trdExstraNum).split('')
		for (var i = 0; i < trdExstraNum_arr.length; i++) {
			frthExstraNum += Number(trdExstraNum_arr[i]);
		}	

		if (String(frthExstraNum).length == 1) {
			frthExstraNum = '0' + String(frthExstraNum);
		} else {
			frthExstraNum = String(frthExstraNum)
		}

		resultNumbers = DofB_arr.join('') + fstExstraNum + sndExstraNum + trdExstraNum + frthExstraNum;
		resultNumbers = resultNumbers.split('');

		for (let i = 0; i < 9; i++) {
			let countOfNum = count(resultNumbers, String(i + 1));

			if (countOfNum) {
				cells[i].innerHTML = valueOfCell(String(i + 1), countOfNum);
			}
		}

	};

}	
	