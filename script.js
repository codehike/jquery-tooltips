$(document).ready(function(){
	var tt = $('[data-tooltip]');
	tt.append('<div class="tooltip">' + tt.data('tooltip') + '</div>');
	var tooltip = $('.tooltip');
	tooltip.hide();
	tt.hover(
		function(){
			tooltip.show();
		},
		function(){
			tooltip.hide();
		}
	);
});