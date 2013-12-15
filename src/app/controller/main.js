Ext.define('CAT.controller.main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			navigator: 'mainMan',
			home: 'home',
			grOneTimeRegistration: 'button[id=grOneTimeRegistration]',
			grLetusknow: 'button[id=grLetusknow]',
			grGeoPoint: 'button[id=grGeoPoint]',
			grStatus: 'button[id=grStatus]',
			otrSave: 'button[id=otrSave]',
			otrGrievanceSave: 'button[id=otrGrievanceSave]'
		},
		control: {
			home: {
				initialize: 'onHomeViewReady'
			},
			'listOfServices': {
				itemtap: 'onServiceTap'
			},
			grOneTimeRegistration: {
				tap: 'onOTPTap'
			},
			grLetusknow: {
				tap: 'onGrievanceTap'
			},
			grGeoPoint: {
				tap: 'onGeoPointTap'
			},
			otrSave: {
				tap: 'onOtrSaveTap'
			},
			otrGrievanceSave: {
				tap: 'onLetUsKnowTap'
			},
			grStatus: {
				tap: 'onGrStatusTap'
			}
		}
	},
	onHomeViewReady: function(){
		this.getHome().push({xtype: 'listOfServices'});
	},
	onServiceTap: function() {
		this.getHome().pop();
		this.getHome().push({xtype: 'welcomeGrievances'});
	},
	onOTPTap: function() {
		this.getHome().push({xtype: 'otr'})
	},
	onGrievanceTap: function() {
		this.getHome().push({xtype: 'letusknow'})
	},
	onGeoPointTap: function() {
		this.getHome().push({xtype: 'letusknow'})
	},
	onOtrSaveTap: function() {
		this.getHome().pop();
		Ext.Msg.alert('Saved successfully');
	},
	onLetUsKnowTap: function() {
		Ext.Msg.alert('Thank you.We will do the needful');
		this.getHome().pop();
	},
	onGrStatusTap: function() {
		this.getHome().push({xtype: 'letusknowStatus'})
	}
})