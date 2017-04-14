new Vue({
    el: '#events',
    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: []
    },
    mounted: function() {
        this.fetchEvents();
        
    },
    methods: {
        fetchEvents: function() {
            var loadEvents = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival in Austin, TX.',
                    date: '2015-03-11'
                }
            ];
            this.events = loadEvents;
            // this.events = loadEvents;
        },

        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {name: '', description: '', date: ''};
            }
        }
    }
})