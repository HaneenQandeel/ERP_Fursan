// Copyright (c) 2018, mawred and contributors
// For license information, please see license.txt

frappe.ui.form.on('Travel Order', {
	refresh: function(frm) {

	},
	// validate: function(frm){
	// 	if (frm.doc.to_agency == frm.doc.from_agency){
	// 		frappe.throw("Destination cannot be the same as the Current agency");
	// 	}
	// }
});


cur_frm.set_query("routing", "travel_order_passenger", function(doc, cdt, cdn) {
	var row = locals[cdt][cdn];
	return{
		filters: [
			['Routing', 'active', '=', 1]
		]
	}
});

// cur_frm.set_query("from_agency", function() {
//         return {
//             filters: [
// 				['Agency', 'active', '=', 1]				
				
// 			]
//         }
// });


cur_frm.set_query("to_agency", function() {
        return {
            filters: [
				['Agency', 'active', '=', 1],
				// ["Agency", "name", "!=", cur_frm.doc.from_agency ]
			]
        }
});

