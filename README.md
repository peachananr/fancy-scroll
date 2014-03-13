#Fancy Scroll by Pete R.
Add an Overflow Scroll Effect like on iOS/Android but for your website
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Notify Better](http://www.thepetedesign.com/images/fancy_scroll_image2.png "Fancy Scroll")](http://www.thepetedesign.com/demos/fancy_scroll_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/fancy_scroll_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari have been tested. IE and Mobile browsers have not been tested.

## Basic Usage
To add an overflow scrolling effect with Fancy Scroll plugin, simply include the latest jQuery library together with `jquery.fancy-scroll.js` into your document's `<head>` and call the function as follows:
  
````javascript
$(window).fancy_scroll({
  animation: "bounce" // Options available are bounce (like on iOS), or glow (like on Android 4.0+)
});
````
That's it. The function call above will add a bounce effect whenever you scroll up and reach the top/bottom of the website indicating the beginning/end of the page. With this script, you can customise these animations even further by using several options I had put in place for you to play around with. See more under Further Customisation.

## Further Customisation
With Fancy Scroll, you can define animation's duration, colours (for glow effect), distance (for bounce effect) and even the CSS animation easing as you wish. Here are all the available options for you to play around with:

````javascript
$(window).fancy_scroll({
  animation: "bounce", // Options available are bounce (like on iOS), or glow (like on Android 4.0+)
 	bounceDistance: 50, // ONLY for bounce effect: The distance in pixels that page will overflow. Default is 50 pixels.
 	glowColor: "#02A1FA", // ONLY for glow effect: The colour of the glow effect. Default is #02A1FA (blueish).
 	animDuration: "0.3s", // The animation duration. Can take milliseconds (200ms) or seconds value (0.2s). Default is 0.2s
 	animEasing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)", // This field accept css easing options. Options available are: linear, ease-in, ease-out, ease-in-out or you can generate it with the tool available here: http://matthewlein.com/ceaser/
 });
````

## Advanced Usage
Fancy Scroll can also be applied to divs rather than the whole document as well. All you have to do is prepare an html as follows:

````html
<div class="container">
  <div class="innerWrapper">
    ...
  </div>
</div>
````
Make sure you have overflow-y scroll on the container. See example below:

````css
.container {
  overflow:hidden;
  max-height: 400px;
}
````

Once all the markups are setup as shown above, you can call the function specifying the container and the innerWrapper as follows:

````javascript
$(".container").fancy_scroll({
  innerWrapper: ".innerWrapper" // Let you define the selector of the inner div for the animation to be applied.
 });
````
Now, your container div will finally have a bounce overflow effect just like your websites. This can be apply to as many divs and/or body as you like. Pretty neat huh? I hope you will find this plugin useful.

## Other Resources
- Tutorial (Coming Soon)
- [CSS Easing generator by Matthew Lein](http://matthewlein.com/ceaser/)
