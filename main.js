document.addEventListener('DOMContentLoaded', function () {
	var checkBoxes = document.querySelectorAll("[id^=item]");
	var toggleAll = document.getElementById('toggleAll');

	function isAllTrue(arr) {
		arr = arr.reduce(function (a, b) {
			if (a === false) {
				return a;
			}
			else return b;
		})

		return arr;
	}

	function checkInputStatus() {
		var arr = [];
		for (var i = 0; i < checkBoxes.length; i++) {
			if (checkBoxes[i].checked) {
				arr.push(true);
			}
			else arr.push(false);
		}

		return isAllTrue(arr);

	}

	function toggleAllHandler() {
		if (checkInputStatus()) {
			for (var i = 0; i < checkBoxes.length; i++) {
				checkBoxes[i].checked = false;
			}
		}
		else
			{
				for (var i = 0; i < checkBoxes.length; i++) {
				checkBoxes[i].checked = true;
						}	
			}
	}

	toggleAll.addEventListener('click', toggleAllHandler);
})

