
// Demo for simplescroll

function addEvents() {
    $('#to-footer').on('click', function() {

        $.simplescroll({
            target: $('.footer')
        });

    });

    $('#callback').on('click', function() {

        $.simplescroll({
            target: $('.section'),
            speed: 400,
            callback: function() {
                alert('done scrolling')
            }
        });

    });

    $('.top').on('click', function() {
        $.simplescroll();
    });

    $('#offset-plus').on('click', function() {
        $.simplescroll({
            target: '.section',
            offset: 100
        });
    });

    $('#offset-').on('click', function() {
        $.simplescroll({
            target: '.section',
            offset: -100
        });
    });

    $('#to-my-id').on('click', function() {
        $.simplescroll({
            target: '#my-id',
            showHash: true
        });
    });

    $('#top-with-hash').on('click', function() {
        $.simplescroll({
            target: '#top',
            showHash: true
        });
    });

    // Target can be a function too!
    $('#function').on('click', function() {
        var btn = this;
        $.simplescroll({
            target: function() {
                return $(btn).data('target');
            }
        });
    });

    $('.nav-links a').simplescroll();
}

$(document).ready( function() {
    // Add all our click events
    addEvents();

    // If the page loaded with a hash, scroll to it
    $.simplescroll.initial();
});
