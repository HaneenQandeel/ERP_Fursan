// Copyright (c) 2018, mawred and contributors
// For license information, please see license.txt

frappe.ui.form.on('Routing', {
	refresh: function(frm) {

	},
	routing_name :function(frm) { 
		cur_frm.doc.routing_name = cur_frm.doc.from + cur_frm.doc.to
		frm.setvalue("routing_name",cur_frm.doc.routing_name)
	}

});
