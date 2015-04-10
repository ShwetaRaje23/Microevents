Ext.define("MicroEvents.view.CircleEditor", {
    extend: "Ext.form.Panel",
    id : 'circleEditor',
    xtype : 'circleEditor',
    requires: [
        "Ext.form.FieldSet",
        'Ext.Picker',
        'Ext.field.DatePicker'
    ],
    config: {
        scrollable: 'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {
            xtype: "button",
            text: "Cancel",
            action: "back",
            ui : 'decline'
        };

        var saveButton = {
            xtype: "button",
            text: "Save",
            action: "save",
            ui : 'action'
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "New Circle",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var circleTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            id: 'circleEditor_title',
            label: 'Title',
            required: true
        };

        var circleNarrativeEditor = {
            xtype: 'textareafield',
            id: 'circleEditor_desc',
            name: 'description',
            label: 'Description'
        };

        var circleUsers = {
            xtype: 'textareafield',
            id: 'circleEditor_invitees',
            name: 'invitees',
            label: 'People'
        };

        var picker = Ext.create('Ext.Picker', {
            slots: [
                {
                    name : 'hour',
                    data : [
                        {text: '01', value: '01'},
                        {text: '02', value: '02'},
                        {text: '03', value: '03'},
                        {text: '04', value: '04'},
                        {text: '05', value: '05'},
                        {text: '06', value: '06'},
                        {text: '07', value: '07'},
                        {text: '08', value: '08'},
                        {text: '09', value: '09'},
                        {text: '10', value: '10'},
                        {text: '11', value: '11'},
                        {text: '12', value: '12'}
                    ]
                },
                {
                    name : 'minutes',
                    data : [
                        {text: '00', value: '00'},
                        {text: '15', value: '15'},
                        {text: '30', value: '30'},
                        {text: '45', value: '45'}
                    ]
                },
                {
                    name : 'ampm',
                    data : [
                        {text: 'AM', value: 'AM'},
                        {text: 'PM', value: 'PM'}
                    ]
                }
            ],
            listeners: {
                hide : function(t, eOpts) {
                    time = t.getValue()
                    correctedTime = time.hour + ":" + time.minutes + " " + time.ampm;
                    Ext.getCmp('eventTime').setValue(correctedTime)
                
                    
                },
            }
        });



        this.add([
            topToolbar,
            { 
                xtype: "fieldset",
                items: [
                    circleTitleEditor, 
                    circleNarrativeEditor,
                    circleUsers
                ]
            }
        ]);
    },
    onSaveButtonTap: function () {
        console.log("saveCircleCommand");
        this.fireEvent("saveCircleCommand", this);
    }

});

