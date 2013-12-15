Ext.define('CAT.view.welcomeGrievances', {
	extend: 'Ext.Panel',
	xtype: 'welcomeGrievances',
	config: {
		layout: {
			type: 'vbox',
			pack: 'center'
		},
		defaultType: 'button',
		items: [{
			text: 'One time Registration',
			id: 'grOneTimeRegistration',
			margin: '5 25 5 25'
		},
		{
			text: 'Let Us Know',
			id: 'grLetusknow',
			margin: '5 25 5 25'
		},
		{
			text: 'Grievances status',
			id: 'grStatus',
			margin: '5 25 5 25'
		},
		{
			text: 'GeoPoint',
			id: 'grGeoPoint',
			margin: '5 25 5 25'			
		}]
	}
});