Ext.define("MicroEvents.store.AllEvents", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Event",
        autoLoad : true,

        data: [
        	{title:'Walk for coffee', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:6, circle_id:1, is_closed:false},
        	{title:'Walk for dog', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:1, circle_id:1, is_closed:false},
        	{title:'Walk for soda', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:6, circle_id:1, is_closed:false},
        	{title:'No walking. Only sleeping.', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:3, circle_id:1, is_closed:false},
        	{title:'Ran out of coffee! No!!!', venue:'Klaus', date:'3-12-2014', time:'12:00 PM', owner_id:2, circle_id:1, is_closed:false}
        ]
    }
});



