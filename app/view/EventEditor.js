Ext.define("MicroEvents.view.EventEditor", {
    extend: "Ext.form.Panel",
    id : 'eventEditor',
    xtype : 'eventEditor',
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
            title: "New Event",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var eventTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };

        var eventNarrativeEditor = {
            xtype: 'textareafield',
            name: 'narrative',
            label: 'Description'
        };

        todaysDate = new Date();

        var eventDate = {
            xtype : 'datepickerfield',
            name : 'date',
            label: 'Date',
            dateFormat : 'd-m-Y',
            value : new Date()
        }

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
                    // console.log(Ext.getCmp('eventTime').getValue())
                    // console.log(correctedTime)
                    Ext.getCmp('eventTime').setValue(correctedTime)
                
                    
                },
            }
        });

        var eventTime = {
            xtype : 'textfield',
            id : 'eventTime',
            name : 'time',
            ui : 'select',
            value: "",
            label: 'Time',
            listeners: {
                focus: function(t, e, eOpts) {
                    picker.show()
                },
            }
        }

        var venue = {
            xtype : 'textfield',
            name : 'venue',
            label: 'Venue'
        }





        this.add([
            topToolbar,
            { 
                xtype: "fieldset",
                items: [
                    eventTitleEditor, 
                    eventNarrativeEditor,
                    venue,
                    eventDate,
                    eventTime
                ]
            }
        ]);
    },
    onSaveButtonTap: function () {
        console.log("saveEventCommand");
        this.fireEvent("saveEventCommand", this);
    }

});

