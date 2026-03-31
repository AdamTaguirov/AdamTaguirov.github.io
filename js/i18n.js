window.App = window.App || {};

App.i18n = {
    currentLang: 'en',
    supportedLangs: ['en', 'fr'],
    cache: {},

    init: function () {
        var saved = localStorage.getItem('lang');
        if (saved && this.supportedLangs.indexOf(saved) !== -1) {
            this.currentLang = saved;
        } else {
            var browserLang = (navigator.language || '').slice(0, 2);
            if (this.supportedLangs.indexOf(browserLang) !== -1) {
                this.currentLang = browserLang;
            }
        }
        document.documentElement.lang = this.currentLang;
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
        this.cache = {};
        return App.render();
    }
};
