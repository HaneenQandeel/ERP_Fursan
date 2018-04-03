// Copyright (c) 2018, mawred and contributors
// For license information, please see license.txt
var x = 0;
frappe.ui.form.on('Travel Order', {
	after_save: function (frm) {
		if (x === 1) {
			$("input:text[data-fieldname='barcode_number']").val(frm.doc.name.split("-")[1]);
			$("input:text[data-fieldname='barcode_number']").trigger('change', jQuery.Event("change"));
			x++;
			frm.save();
		}

	},
	before_save: function (frm) {
		x = 0;
		if ((x === 0) && (frm.doc.__islocal)) {
			frm.doc.barcode_number = '<svg height="80"></svg>';
			x++;
		}


	},
	validate: function (frm) {
		if (frm.doc.to_agency) {
			if (frm.doc.to_agency == frm.doc.from_agency) {
				frappe.throw("Destination cannot be the same as the Current agency");
			}
		}
	}
});


cur_frm.set_query("routing", "travel_order_passenger", function (doc, cdt, cdn) {
	var row = locals[cdt][cdn];
	return {
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