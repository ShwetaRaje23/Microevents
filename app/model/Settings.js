Ext.define('MicroEvents.model.Settings', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'email', type: 'auto' }
        ]
    }
});
