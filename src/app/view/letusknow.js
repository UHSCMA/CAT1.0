Ext.define('CAT.view.letusknow', {
	extend: 'Ext.form.Panel',
	xtype: 'letusknow',
	config: {
		items: [
		
		{
			xtype: 'selectfield',
			label: 'Grievance Type',
			options: [
	{value: "01" ,text: "Engineering"}, 
	{value: "02" ,text: "General & Administration"}, 
	{value: "03" ,text: "Public Health"}, 
	{value: "04" ,text: "Revenue"}, 
	{value: "05" ,text: "Town Planning"}, 
	{value: "06" ,text: "Others"}
]

		},
		{
			xtype: 'selectfield',
			label: 'Grievance subtype',
			options :[
	{value: "01" ,text: "Maintenance of Roads, Culverts, Drains, SWD Drains, Canals"}, 
	{value: "02" ,text: "Street Light Related"}, 
	{value: "03" ,text: "Under Ground Drainage"}, 
	{value: "04" ,text: "Undertaking Development Works"},
	{value: "05" ,text: "Water Supply Related"},
	{value: "06" ,text: "Others"}
]
		},
		{
			xtype: 'textareafield',
			maxRows: 15,
			label: 'Grievances'
		},
		{
			xtype: 'button',
			text: 'Let CMA Know',
			id: 'otrGrievanceSave',
			style: 'align: center',
			ui: 'confirm',
			docked: 'bottom'
		}
		/*{
			xtype: 'picker'
		},
		{
			xtype: 'label',
			html: 'Grievance type'
		},
		{
			xtype: 'picker'
		},
		{
			xtype: 'label',
			html: 'Grienances subtype'
		},
		{
			xtype: 'picker'
		}*/
		]
	}
});