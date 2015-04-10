Ext.define('MicroEvents.model.Circle', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'circle_name', type: 'auto' },
            { name: 'users', type: 'auto' },
            { name: 'owner', type: 'auto' },
            { name: 'first_name', type: 'auto' },
            { name: 'last_name', type: 'auto' },
            { name: 'user_id', type: 'auto' },
            { name: 'email', type: 'auto' }
        ]
    }
});
