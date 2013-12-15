Ext.define('CAT.view.home', {
	extend: 'Ext.NavigationView',
	xtype: 'home',
	id: 'home',
	config: {
		navigationBar: false,
		items: [{
			xtype: 'header'
		},
		{
			xtype: 'footer'
		}]
	}
});