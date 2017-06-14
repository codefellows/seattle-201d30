# Assignment Overview: Lab for Class 8

Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

### Instructions

Here's some of the steps you'll need to take, but not necessarily in this order:

- Add the necessary HTML to create the input form.
- Don't forget \<fieldset>!
- Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)
- Your JS will need an event listener and and event handler, and also a variable to facilitate DOM access to the form.
- As we saw in class, the event handler should take the data from the input field, pass it into the constructor function, and create a new instance of a cookie stand that then appends to the table.
- Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.
- Build incrementally. Test frequently.
- Be attentive to overall code structure.
- This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. Remember that each function should do one thing, and then you can compose more complex behavior out of functions.
- Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.
- When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.

Submit your assignment through Canvas as usual.

## User Stories (Stretch... NOT REQUIRED)
- As a developer, I will continue to work on design aspects of the public-facing page. (Use the photo assets in the class 7 lab directory.)
- As a developer, I will extend the style I created for the public-facing page to my stores page.
- As a developer, to facilitate design work, I will build a style guide. Example style guide: [this one that a team Brian was on made for Everlast](http://everlast.com/style-guide)
- As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Pat manage staffing. Using the basic rubric that a single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
