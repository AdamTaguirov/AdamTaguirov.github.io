window.App = window.App || {};

App.state = {
    activeTab: 'cv',
    data: null
};

App.render = function () {
    return App.i18n.loadAll().then(function (data) {
        App.state.data = data;

        // Render nav
        var nav = document.getElementById('mainNav');
        nav.innerHTML = App.renderer.renderNav(data.ui, App.state.activeTab);

        // Render active tab content
        var content = document.getElementById('appContent');
        switch (App.state.activeTab) {
            case 'cv':
                content.innerHTML = App.renderer.renderCvTab(data);
                break;
            case 'projects':
                content.innerHTML = App.renderer.renderProjectsTab(data);
                break;
            case 'interests':
                content.innerHTML = App.renderer.renderInterestsTab(data);
                break;
            case 'gallery':
                content.innerHTML = App.renderer.renderGalleryTab(data);
                break;
            case 'contact':
                content.innerHTML = App.renderer.renderContactTab(data);
                break;
        }

        // Update language toggle text
        var langBtn = document.getElementById('langToggle');
        langBtn.textContent = data.ui.language.switchLabel;

        // Attach tab click handlers
        nav.querySelectorAll('.tab-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                App.state.activeTab = btn.dataset.tab;
                history.replaceState(null, '', '#' + btn.dataset.tab);
                App.render().then(function () {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        });
    });
};

App.initTheme = function () {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    document.getElementById('themeToggle').addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
};

App.init = function () {
    App.i18n.init();
    App.initTheme();

    // Check URL hash for initial tab
    var hash = window.location.hash.slice(1);
    if (['cv', 'projects', 'interests', 'gallery', 'contact'].indexOf(hash) !== -1) {
        App.state.activeTab = hash;
    }

    // Language toggle
    document.getElementById('langToggle').addEventListener('click', function () {
        App.i18n.switchLang();
    });

    // Handle hash changes (browser back/forward)
    window.addEventListener('hashchange', function () {
        var hash = window.location.hash.slice(1);
        if (['cv', 'projects', 'interests', 'gallery', 'contact'].indexOf(hash) !== -1) {
            App.state.activeTab = hash;
            App.render();
        }
    });

    // Initial render
    App.render();
};

document.addEventListener('DOMContentLoaded', function () {
    App.init();
});
