var React = require('react'),
    Link = require('flux-router-component').NavLink,
    ReactPropTypes = React.PropTypes;

// Feed item view
var FeedItem = React.createClass({
    propTypes: {
        feedItem: ReactPropTypes.object.isRequired
    },

    // Render feed View
    render: function () {
        if (Object.keys(this.props.feedItem).length < 1) {
            return null;
        }

        var href = this.props.feedItem.link;

        return (
                <div className="feed col-xs-4">
                    <div className="feed-item">

                        <div className="feed-img">
                            <a href={href}>
                                <img className="img-responsive" src={this.props.feedItem.images.standard_resolution.url} />
                            </a>
                            <a href={href} className="feed-like"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            );
    }
});

module.exports = FeedItem;