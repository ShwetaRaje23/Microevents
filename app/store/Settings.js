Ext.define("MicroEvents.store.Settings", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Settings",
        autoLoad : true,

        data: [
        	{title:'Edit Group' },
        	{title:'Add Group'},
        	{title:'Contacts'},
        	
        ]
    },

     
    //trying to do listerners.
     // itemTpl: '{title}',
     //  listeners: {
     //            select: function() {
     //                Ext.Msg.alert('Selected!', 'You selected ' + record.get('title'));
     //            }
     //        }
});



