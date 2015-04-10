Ext.define('MicroEvents.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'event_id', type: 'auto' },
            { name: 'event_name', type: 'auto' },
            { name: 'venue', type: 'auto' },
            { name: 'date', type: 'date' },
            { name: 'time', type: 'auto' },
            { name: 'owner_id', type: 'auto' },
            { name: 'owner_name', type : 'auto'},
            { name: 'is_closed', type: 'boolean' },
            { name: 'attendees_number', type: 'auto' }
        ]
    }
});
