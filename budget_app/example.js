	function fieldTotal() {
		//create container for total input field value
		var fieldsetInputValue = 0;

		var $inputFieldsArray = $('#income_fieldset').find('input').toArray();
		//select their values
		console.log($inputFieldsArray);
	};

	$('#income_submit').click(function() {
		//create container for total input field value
		var fieldsetInputValue = 0;
		//select its childen input boxes
		var $inputFieldsArray = $('#income_fieldset').find('input').toArray();

		var $budgetTimePeriod = $('#main_timescale').val();
		console.log($budgetTimePeriod);
		//select their values
		var fieldsetOutputValue = 0;

		for (let i = 0; i < $inputFieldsArray.length; i++){
			var optionValue = $($inputFieldsArray[i]).next('select').val();
			var inputValue = parseFloat($inputFieldsArray[i].value)
			var outputValue = optionValue * inputValue;
			console.log(inputValue);
			fieldsetInputValue += outputValue;
			fieldsetOutputValue = (fieldsetInputValue / $budgetTimePeriod);
			document.getElementById('income_field_total').innerHTML = fieldsetOutputValue + '$';
		}
	});
	

	


//make input divs disappear & reappear when legend is clicked
//bind disappear function to click
	$('.field_legend_container').click(function() {
		var divDisappearTarget = $(this).next('div');
		if (divDisappearTarget.hasClass('hidden')) {
			divDisappearTarget.slideDown('slow');
			divDisappearTarget.removeClass('hidden');
		} else {
			divDisappearTarget.slideUp('slow');
			divDisappearTarget.addClass('hidden');
		}
	});
