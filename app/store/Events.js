Ext.define("MicroEvents.store.Events", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Event",
        autoLoad : true,

        data: [
        	{title:'Walk for coffee', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:'Sasha', circle_id:1, is_closed:false},
        	{title:'Walk for dog', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:'Rahul', circle_id:1, is_closed:false},
        	{title:'Walk for soda', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:'Sasha', circle_id:1, is_closed:false},
        	{title:'No walking. Only sleeping.', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:'Divya', circle_id:1, is_closed:false},
        	{title:'Ran out of coffee! No!!!', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:'Abhinav', circle_id:1, is_closed:false}
        ]
    }
});



