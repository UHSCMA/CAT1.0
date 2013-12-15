Ext.define('CAT.view.otr', {
	extend: 'Ext.form.Panel',
	xtype: 'otr',
	config: {
		items: [{
			xtype: 'titlebar',
			title: 'Personal Information'
		},{
			xtype: 'textfield',
			label: 'Name'
		},
		{
			xtype: 'textfield',
			label: 'Address'
		},
		{
			xtype: 'textfield',
			label: 'city'
		},
		{
			xtype: 'textfield',
			label: 'pincode'
		},
		{
			xtype: 'emailfield',
			label: 'Email'
		},
		{
			xtype: 'textfield',
			label: 'Telephone/Mobile No'
		},
		
		{
			xtype: 'selectfield',
			label: 'District',
			options: [
     {value: "17" ,text: "ARIYALUR"}, 
     {value: "02" ,text: "CMA OFFICE"}, 
     {value: "12" ,text: "COIMBATORE"}, 
     {value: "99" ,text: "CORPORATION"}, 
     {value: "18" ,text: "CUDDALORE"}, 
     {value: "05" ,text: "DHARMAPURI"}, 
     {value: "13" ,text: "DINDIGUL"}, 
     {value: "10" ,text: "ERODE"}, 
     {value: "03" ,text: "KANCHIPURAM"}, 
     {value: "30" ,text: "KANNIYAKUMARI"}, 
     {value: "14" ,text: "KARUR"}, 
     {value: "31" ,text: "KRISHNAGIRI"}, 
     {value: "24" ,text: "MADURAI"}, 
     {value: "19" ,text: "NAGAPATTINAM"}, 
     {value: "09" ,text: "NAMAKKAL"}, 
     {value: "16" ,text: "PERAMBALUR"}, 
     {value: "22" ,text: "PUDUKKOTTAI"}, 
     {value: "27" ,text: "RAMANATHAPURAM"}, 
     {value: "08" ,text: "SALEM"}, 
     {value: "23" ,text: "SIVAGANGAI"}, 
     {value: "21" ,text: "THANJAVUR"}, 
     {value: "25" ,text: "THENI"}, 
     {value: "11" ,text: "THE NILGIRIS"}, 
     {value: "28" ,text: "THOOTHUKKUDI "}, 
     {value: "15" ,text: "TIRUCHIRAPPALLI"}, 
     {value: "29" ,text: "TIRUNELVELI"}, 
     {value: "32" ,text: "TIRUPPUR"}, 
     {value: "01" ,text: "TIRUVALLUR"}, 
     {value: "06" ,text: "TIRUVANNAMALAI"}, 
     {value: "20" ,text: "TIRUVARUR"}, 
     {value: "04" ,text: "VELLORE"}, 
     {value: "07" ,text: "VILLUPURAM"}, 
     {value: "26" ,text: "VIRUDHUNAGAR"}]


		},
		{
			xtype: 'selectfield',
			label: 'Corporation/Municipality',
			options :[
	{value: "01" ,text: "ANAKAPUTHUR"}, 
	{value: "02" ,text: "CHENGALPATTU"}, 
	{value: "03" ,text: "KANCHIPURAM"}, 
	{value: "04" ,text: "MADURANTHAGAM"},
	{value: "05" ,text: "MARAIMALAINAGAR"},
	{value: "06" ,text: "PALLAVAPURAM"},
	{value: "07" ,text: "PAMMAL"},
	{value: "08" ,text: "TAMBARAM"}
]
		},
		{
			xtype: 'button',
			text: 'Save',
			id: 'otrSave',
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