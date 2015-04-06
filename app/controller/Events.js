Ext.define("MicroEvents.controller.Events", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            eventsListContainer: "home",
            eventEditor: "eventeditor"
        },
        control: {
            eventsListContainer: {
                // The commands fired by the notes list container.
                newEventCommand: "onNewEventCommand",
                editEventCommand: "onEditEventCommand"
            },
            eventEditor: {
                // The commands fired by the note editor.
                saveEventCommand: "onSaveEventCommand"
            }

        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateEventEditor: function (record) {

        var eventEditor = this.getEventEditor();
        eventEditor.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(eventEditor, this.slideLeftTransition);
    },
    activateEventsList: function () {
        Ext.Viewport.animateActiveItem(this.getEventsListContainer(), this.slideRightTransition);
    },

    // Commands.
    onNewEventCommand: function () {

        console.log("onNewEventCommand");

        var now = new Date();
        var eventId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newEvent = Ext.create("MicroEvents.model.Note", {
            id: noteId,
            dateCreated: now,
            title: "",
            narrative: ""
        });

        this.activateEventEditor(newEvent); 
     
    },
    onEditEventCommand: function (list, record) {

        console.log("onEditEventCommand");

        this.activateEventEditor(record);
    },
    onSaveEventCommand: function () {

        console.log("onSaveEventCommand");

        var eventEditor = this.getEventEditor();

        var currentEvent = eventEditor.getRecord();
        var newValues = eventEditor.getValues();

        // Update the current note's fields with form values.
        currentEvent.set("title", newValues.title);
        currentEvent.set("narrative", newValues.narrative);

        var errors = currentEvent.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField("title")[0].getMessage(), Ext.emptyFn);
            currentEvent.reject();
            return;
        }

        var eventsStore = Ext.getStore("MyEvents");

        if (null == eventsStore.findRecord('id', currentEvent.data.id)) {
            eventsStore.add(currentEvent);
        }

        eventsStore.sync();

        eventsStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateEventsList();
    },  

    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        Ext.getStore("MyEvents").load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});