Ext.define('CAT.view.listOfServices', {
	extend: 'Ext.List',
	xtype: 'listOfServices',
	config: {
		//fullscreen: true,
		itemTpl: '<img src={loc} width: "82px" height="76px" style="vertical-align:middle"><p style="display: inline-block;color: green">{name}</p><p style="color: gray;float: right;display:inline-block;font-size: 14px">{desc}</p>',
		data: [{
			name: 'Grievances - Personal Informations',
			desc: 'Let us know your grievances',
			loc: 'images/griev.jpg'
		},
		{
			name: 'CMA Budgets',
			desc: 'Funds allocation',
			loc: 'images/buget.jpg'
		}],
	}
});