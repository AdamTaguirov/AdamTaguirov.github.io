window.App = window.App || {};

App.i18n = {
    currentLang: 'en',
    supportedLangs: ['en', 'fr'],
    cache: {},

    init: function () {
        // Precedence: URL ?lang= param > saved preference > browser language
        var urlLang = new URLSearchParams(window.location.search).get('lang');
        if (urlLang && this.supportedLangs.indexOf(urlLang) !== -1) {
            this.currentLang = urlLang;
            localStorage.setItem('lang', urlLang);
        } else {
            var saved = localStorage.getItem('lang');
            if (saved && this.supportedLangs.indexOf(saved) !== -1) {
                this.currentLang = saved;
            } else {
                var browserLang = (navigator.language || '').slice(0, 2);
                if (this.supportedLangs.indexOf(browserLang) !== -1) {
                    this.currentLang = browserLang;
                }
            }
        }
        document.documentElement.lang = this.currentLang;
        // Always reflect the active language in the URL so it can be shared directly
        this.updateUrl();
    },

    // Keep ?lang= in the address bar in sync with the active language,
    // preserving the current tab (hash) and any other query params.
    updateUrl: function () {
        var params = new URLSearchParams(window.location.search);
        params.set('lang', this.currentLang);
        var newUrl = window.location.pathname + '?' + params.toString() + window.location.hash;
        history.replaceState(null, '', newUrl);
    },

    load: function (filename) {
        var key = this.currentLang + '/' + filename;
        if (this.cache[key]) {
            return Promise.resolve(this.cache[key]);
        }
        var self = this;
        return fetch('data/' + this.currentLang + '/' + filename + '.json')
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
                self.cache[key] = data;
                return data;
            });
    },

    loadAll: function () {
        var files = [
            'profile', 'experiences', 'education',
            'certificates', 'skills', 'projects',
            'conferences', 'contact', 'interests', 'gallery', 'ui'
        ];
        var self = this;
        return Promise.all(files.map(function (f) { return self.load(f); }))
            .then(function (results) {
                var data = {};
                files.forEach(function (f, i) { data[f] = results[i]; });
                return data;
            });
    },

    switchLang: function () {
        this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
        localStorage.setItem('lang', this.currentLang);
        document.documentElement.lang = this.currentLang;
        this.updateUrl();
        this.cache = {};
        return App.render();
    }
};
