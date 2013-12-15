Ext.application({
	name: 'CAT',
	views: ['home', 'header', 'footer', 'mainMan', 'listOfServices', 'welcomeGrievances', 'otr', 'letusknow', 'letusKnowStatus'],
	stores: ['municipality'],
	controllers: ['main'],
	launch: function() {
		Ext.Viewport.add({
			xtype: 'home'
		})
	}
})