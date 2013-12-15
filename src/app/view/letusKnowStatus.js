Ext.define('CAT.view.letusKnowStatus', {
	extend: 'Ext.List',
	xtype: 'letusknowStatus',
	config: {
		data: [
	{value: "01" ,text: "ST0012", desc: 'Solid waste maintainance'}, 
	{value: "02" ,text: "ST0013", desc: 'Electrcity connection'}],
		itemTpl: '<p style="color: green; display: block">{text}</p><p style="color: gray; font-size: 12px">{desc}</p>'
	}
});