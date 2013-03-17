# jQuery UI Tabs Rotate: Pause on Hover

## What for?

Since version 1.9 jQuery UI [has been removed rotate method](http://jqueryui.com/upgrade-guide/1.9/#removed-rotate-method) and suggested for users to use [rotate extension](https://github.com/cmcculloh/jQuery-UI-Tabs-Rotate). But most users/developers wants to make pause on hover for their rotating tabs. This jQuery UI extension makes possible to pause on hover with some options, look **Usage**.

### Required ###

- [jQuery 1.6+](http://jquery.com)
- [jQuery UI (1.9+ version) Tabs](http://jqueryui.com/tabs/)
- [jQuery UI Tabs Rotate extension](https://github.com/cmcculloh/jQuery-UI-Tabs-Rotate)

### Usage ###

```html
	<head>
		<script type="text/javascript" charset="utf-8" src="js/jquery.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/jquery-ui-1.10.2.custom.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/jquery-ui-tabs-rotate.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/jquery-ui-tabs-hover.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/custom.js"></script>
	</head>
	<body>
		<div id="test">
			<div class="fragment" id="fragment-0"><img src="images/1.jpg" /></div>
			<div class="fragment" id="fragment-1"><img src="images/2.jpg" /></div>
			<div class="fragment" id="fragment-2"><img src="images/3.jpg" /></div>
			<ul>
				<li><a href="#fragment-0">1</a></li>
				<li><a href="#fragment-1">2</a></li>
				<li><a href="#fragment-2">3</a></li>
			</ul>
		</div>
    </body>
```

```javascript

	//custom.js
	//example rotate delay time = 4000ms = 4s
	
	//pause on hover and keeps on unhover
	jQuery(document).ready(function() {
		jQuery("#test").tabs().tabs("rotate", 4000, true).tabs("hover", true, false);
	});
	
	//pause on hover and unpause on unhover
	jQuery(document).ready(function() {
		jQuery("#test").tabs().tabs("rotate", 4000, true).tabs("hover", true, true);
	});
```

## License

Extension is provided under the MIT License.

## Contribution

Please fork, add specs, and send pull requests!