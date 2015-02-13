/**
	React app source file.

	Use as is by including the jsx transformer in the page header:
	<script src="http://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
	
	and specifying the script tag in the html like this:
	<script type="text/jsx;harmony=true" src="src/app.js"></script>

	or...

	install the npm jsx tools:
	npm install -g jsx

	then from the project root directory use the jsx transformer to watch and compile then 
	output to the js folder

	jsx --watch src/ js/

	and include in the html as without needing the jsx references:

	<script type="text/javascript" src="js/app.js"></script>

*/

var HelloBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello world!
            </div>
        );
    }
});

React.render(
    <HelloBox/>,
    document.getElementById('content')
);