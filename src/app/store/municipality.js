Ext.define('CAT.store.municipality', {
	extend: 'Ext.data.Store',
	config: {
		fields: ['municipality'],
		autoLoad: false,
		proxy: {
			type: 'ajax',
			headers: {
				'Access-Control-Allow-Origin' : '*'
			},
			url: 'http://municipalities.tn.nic.in:8080/ulb-grievances/ajax.html?page=municipality&districtCode=02'
		},
		reader: {
			type: 'xml',
			rootProperty: 'root'
		}
	}
});