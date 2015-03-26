Ext.define('MicroEvents.model.Event', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'eid', type: 'auto' },
            { name: 'title', type: 'auto' },
            { name: 'date', type: 'auto' },
            { name: 'venue', type: 'auto' },
            { name: 'time', type: 'auto' },
            { name: 'owner_id', type: 'auto' },
            { name: 'circle_id', type: 'auto' }
        ]
    }
});
