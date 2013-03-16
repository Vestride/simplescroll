# SimpleScroll

Simplescroll is a jQuery plugin for scrolling the browser window.

For example, you want a button with an id of `#to-my-id` to scroll to the `#my-id` div and also show the hash in the url.

```js
$('#to-my-id').on('click', function() {
    $.simplescroll({
        target: '#my-id',
        showHash: true
    });
});
```

Or maybe you just want to scroll to the top of the page.

```js
$.simplescroll();
```

Or scroll to 100 pixels above the footer with a set speed and callback.

```js
 $.simplescroll({
     target: $('#footer'),
     speed: 400,
     offset: 100,
     callback: function() {
         console.log('done scrolling');
     }
 });
```


### Attach `simplescroll` to a collection

Have a few jump links in your page? Attach simplescroll to the jQuery collection!

```js
$('.nav-links a').simplescroll();
```

This will add a click event to each anchor tag inside the `.nav-links` class. By default, its target will be the `href` attribute of the element. You're also still able to use the same options as before.


### Loading a page with a hash

If the page loads with a hash you need to scroll to use `$.simplescroll.initial()`. For example:

```js
$(document).ready( function() {
    // Do some work on document ready
    // .....

    // If the page loaded with a hash, scroll to it
    $.simplescroll.initial();
});
```

### The Default Options

```js
$.simplescroll.options = {
  target: 'body', // can be a selector or jQuery object or a function that returns one of those
  speed: 400, // duration of the animation
  easing: $.easing.easeOutQuad ? 'easeOutQuad' : 'swing', // easing function to use. Defaults to easeOutQuad if it's available
  showHash: false, // if showHash is true, and your target has an ID, this will add that id to the browser's hash
  callback: $.noop, // called after the animation is finished. Default is an empty function
  offset: 0 // distance from the target to scroll to. Positive numbers will result in the window being above your target, negative and it will be below
};
```



