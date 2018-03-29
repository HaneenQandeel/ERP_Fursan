// Copyright (c) 2018, mawred and contributors
// For license information, please see license.txt

frappe.ui.form.on('Routing', {
	refresh: function(frm) {

	},
	routing_from :function(frm) {
		if (cur_frm.doc.routing_from && cur_frm.doc.routing_to){
			frm.set_value("naming",cur_frm.doc.routing_from + '/' + cur_frm.doc.routing_to )
		}

	},
	routing_to : function(frm) {
		if (cur_frm.doc.routing_to && cur_frm.doc.routing_from){
			frm.set_value("naming",cur_frm.doc.routing_from + '/' + cur_frm.doc.routing_to )
		}

	}

});
