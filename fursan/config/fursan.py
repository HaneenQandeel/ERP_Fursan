from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("General"),
			"items": [
				{
					"type": "doctype",
					"name": "Travel Order",
					"description": _("Travel Order.")
				},
				{
					"type": "doctype",
					"name": "Routing",
					"description":_("Routing"),

				},
				{
					"type": "doctype",
					"name": "Agency",
					"description": _("Agency."),
				}
			]
		}
	]
