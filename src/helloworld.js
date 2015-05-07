'use strict';

var I18nApp = React.createClass({
	
    componentDidMount: function () {

        var that = this;
        i18n.init({
            lng: navigator.language,
			fallbackLng: 'en',
            supportedLngs: ['en', 'de', 'cn'],
            preload: ['en','de', 'cn']
        }, function (t) {
            console.log(t('app.name'));
			that.applyLang(that);
        });
    },
	
	applyLang: function (that) {
        var that = that;	
		$(that.refs.app.getDOMNode()).i18n();
		$(that.refs.nav.getDOMNode()).i18n();
	},
	
    switchLang: function (that, lang) {
        var that = that;
        i18n.setLng(lang, function (t) {
            that.applyLang(that);
        });
        console.log('switch:' + lang);
    },

	
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <h2 ref="app" data-i18n="app.title">...</h2>
                <ul ref="nav">
                    <li>
                        <a href="#" data-i18n="nav.home"></a>
                    </li>
                    <li>
                        <a href="#" data-i18n="nav.page1"></a>
                    </li>
                    <li>
                        <a href="#" data-i18n="nav.page2"></a>
                    </li>
                </ul>
                <div className="btn-group" role="group">
                    <button type="button" onClick={this.switchLang.bind(null, this, 'en')}>en</button>
                    <button type="button" onClick={this.switchLang.bind(null, this, 'de')}>de</button>
                    <button type="button" onClick={this.switchLang.bind(null, this, 'cn')}>簡中</button>
                </div>

            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <I18nApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);