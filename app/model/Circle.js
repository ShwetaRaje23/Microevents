Ext.define('MicroEvents.model.Circle', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'cid', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'users', type: 'auto' },
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'email', type: 'auto' }
        ]
    }
});
