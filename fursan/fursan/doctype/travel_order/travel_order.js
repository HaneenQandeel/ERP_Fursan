// Copyright (c) 2018, mawred and contributors
// For license information, please see license.txt

frappe.ui.form.on('Travel Order', {
	refresh: function(frm) {

	}
});


cur_frm.set_query("routing", "travel_order_passenger", function(doc, cdt, cdn) {
	var row = locals[cdt][cdn];
	return{
		filters: [
			['Routing', 'active', '=', 1]
		]
	}
});