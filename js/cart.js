$(document).ready(function() {
	$("#payment-detail .quantity-toggle-plus").click(function() {
		var qtyInput = $(this).parent().find("input");
		var qtyValue = parseInt(qtyInput.val());
		qtyInput.val(qtyValue + 1);
	});

	$("#payment-detail .quantity-toggle-minus").click(function() {
		var qtyInput = $(this).parent().find("input");
		var qtyValue = parseInt(qtyInput.val());
		if (qtyValue != 0) {
			qtyInput.val(qtyValue - 1);
		}
	});

	$("#payment-detail .quantity-toggle-group input").change(function() {
		var qtyValue = $(this).val();
		if (!$.isNumeric(qtyValue)) {
			$(this).addClass("error");
		}
		else {
			$(this).removeClass("error");
		}
	});
});