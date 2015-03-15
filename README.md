# PolymerForm
PolymerForm lets you create google [polymer](https://www.polymer-project.org/0.5/components/paper-input/demo.html)-like style form easily.


![](http://takuro.ws/gh/polymer-form.gif)

## Demo and Documentation
[Demo and Documentation](http://taxpon.github.io/PolymerForm)

## Feature
- Polymer like style
- Easy to use
    - You can handle PolymerForm like common style form.
- Easy to customize appearance
    - Bar color
    - Bar height
    - Direction of bar animation
    - Label color
- Also work with mobile

![](http://takuro.ws/gh/polymer-form2.gif)

## Get started

1. Import jQuery and PolymerForm.
```
<!-- CSS -->
<link rel="stylesheet" href="css/jquery.polymer-form.min.css"/>
<!-- JS -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/jquery.polymer-form.min.js"></script>
```
2. Create some input elements.
```
<input type="text" label="Name" name="name" class="demo-form">
<input type="password" label="Password" name="password" class="demo-form">
```
3. Kick polymerForm function.
```
$(document).ready(function(){
    $(".demo-form").polymerForm();
});
```

## Author & License

Takuro Wada

- [Website](http://takuro.ws/about)
- [Twitter](http://twitter.com/taxpon)

[MIT License](http://takuro.mit-license.org/).
