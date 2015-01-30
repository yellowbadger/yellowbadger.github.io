/**
	React app source file.
*/

var HelloBox = React.createClass({displayName: "HelloBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello world!"
            )
        );
    }
});

React.render(
    React.createElement(HelloBox, null),
    document.getElementById('content')
);