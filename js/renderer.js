window.App = window.App || {};

App.icons = {
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    twitter: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    mappin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    slides: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    video: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    graduation: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>',
    mic: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11z"/></svg>',
    download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
};

App.renderer = {
    formatDate: function (dateStr) {
        if (!dateStr) return '';
        var parts = dateStr.split('-');
        var date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1);
        return date.toLocaleDateString(App.i18n.currentLang, {
            year: 'numeric',
            month: 'short'
        });
    },

    renderNav: function (uiData, activeTab) {
        var tabs = ['cv', 'projects', 'interests', 'gallery', 'contact'];
        return tabs.map(function (tab) {
            var isActive = tab === activeTab;
            return '<button class="tab-btn' + (isActive ? ' active' : '') + '" ' +
                'data-tab="' + tab + '" role="tab" aria-selected="' + isActive + '">' +
                uiData.tabs[tab] + '</button>';
        }).join('');
    },

    renderProfileHero: function (profile, ui) {
        var statusClass = profile.openToWork ? 'open' : 'closed';
        var statusText = profile.openToWork ? ui.labels.openToWork : ui.labels.notOpenToWork;
        var statusBadge = '<span class="stat-badge ' + statusClass + '">' + statusText + '</span>';
        var subtitleHtml = profile.subtitle ? '<p class="profile-subtitle">' + profile.subtitle + '</p>' : '';
        return '<section class="profile-hero">' +
            '<img class="profile-photo" src="' + profile.photo + '" alt="' + profile.name + '">' +
            '<div class="profile-info">' +
            '<h1 class="profile-name">' + profile.name + '</h1>' +
            '<p class="profile-title">' + profile.title + '</p>' +
            subtitleHtml +
            '<div class="profile-stats">' +
            '<span class="stat-badge accent"><strong>' + profile.yearsOfExperience + '</strong> ' + ui.labels.yearsExperience + '</span>' +
            '<span class="stat-badge">' + profile.degree + '</span>' +
            statusBadge +
            '</div>' +
            '<a class="download-cv-btn" href="' + profile.cvPdf + '" download>' +
            App.icons.download + ' ' + ui.labels.downloadCv +
            '</a>' +
            '</div>' +
            '</section>';
    },

    renderExperienceCard: function (exp, ui) {
        var endLabel = exp.current ? ui.labels.present : this.formatDate(exp.endDate);
        var currentBadge = exp.current ? '<span class="current-badge">' + ui.labels.current + '</span>' : '';
        var sectorBadge = '';
        if (exp.sector) {
            var sectorLabel = ui.labels['sector_' + exp.sector] || exp.sector;
            sectorBadge = '<span class="sector-badge sector-' + exp.sector + '">' + sectorLabel + '</span>';
        }
        var tags = exp.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
        var highlights = '';
        if (exp.highlights && exp.highlights.length) {
            highlights = '<ul class="experience-highlights">' +
                exp.highlights.map(function (h) { return '<li>' + h + '</li>'; }).join('') +
                '</ul>';
        }
        return '<article class="experience-card">' +
            '<div class="experience-timeline-col">' +
            '<span class="timeline-dot' + (exp.current ? ' active' : '') + '"></span>' +
            '<span class="timeline-line"></span>' +
            '</div>' +
            '<div class="experience-logo-wrap">' +
            '<img class="experience-logo" src="' + exp.logo + '" alt="' + exp.company + '" loading="lazy">' +
            '</div>' +
            '<div class="experience-content">' +
            '<div class="experience-header">' +
            '<div class="experience-title-row">' +
            '<h3 class="experience-role">' + exp.role + '</h3>' +
            currentBadge +
            sectorBadge +
            '</div>' +
            '<p class="experience-company">' + exp.company + ' &middot; ' + exp.location + '</p>' +
            '<p class="experience-dates">' + this.formatDate(exp.startDate) + ' — ' + endLabel + '</p>' +
            '</div>' +
            (exp.description ? '<p class="experience-desc">' + exp.description + '</p>' : '') +
            highlights +
            (tags ? '<div class="experience-tags">' + tags + '</div>' : '') +
            '</div>' +
            '</article>';
    },

    renderExperiences: function (data, ui) {
        var self = this;
        var cards = data.experiences.map(function (e) { return self.renderExperienceCard(e, ui); }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.experience + '</h2>' +
            '<div class="timeline">' + cards + '</div>' +
            '</section>';
    },

    renderEducation: function (data, ui) {
        var cards = data.education.map(function (edu) {
            var iconHtml = edu.logo
                ? '<img class="education-logo" src="' + edu.logo + '" alt="' + edu.institution + '" loading="lazy">'
                : '<div class="education-icon-fallback">' + App.icons.graduation + '</div>';
            return '<article class="education-card">' +
                '<div class="education-icon">' + iconHtml + '</div>' +
                '<div class="education-content">' +
                '<h3 class="education-degree">' + edu.degree + '</h3>' +
                '<p class="education-institution">' + edu.institution + ' &middot; ' + edu.location + '</p>' +
                '<p class="education-years">' + edu.startYear + ' — ' + edu.endYear + '</p>' +
                (edu.description ? '<p class="education-desc">' + edu.description + '</p>' : '') +
                (edu.diplomaId ? '<p class="education-id">ID: ' + edu.diplomaId + '</p>' : '') +
                '</div>' +
                '</article>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.education + '</h2>' +
            '<div class="education-list">' + cards + '</div>' +
            '</section>';
    },

    renderCertificates: function (data, ui) {
        var cards = data.certificates.map(function (cert) {
            var linkHtml = cert.url
                ? '<a class="cert-link" href="' + cert.url + '" target="_blank" rel="noopener">' + App.icons.external + '</a>'
                : '';
            var iconHtml = cert.logo
                ? '<img class="certificate-logo" src="' + cert.logo + '" alt="' + cert.issuer + '" loading="lazy">'
                : '<div class="certificate-icon-fallback">' + App.icons.award + '</div>';
            return '<article class="certificate-card">' +
                '<div class="certificate-icon">' + iconHtml + '</div>' +
                '<div class="certificate-content">' +
                '<h3 class="certificate-name">' + cert.name + linkHtml + '</h3>' +
                '<p class="certificate-issuer">' + cert.issuer + ' &middot; ' + cert.date + '</p>' +
                (cert.credentialId ? '<p class="certificate-id">ID: ' + cert.credentialId + '</p>' : '') +
                '</div>' +
                '</article>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.certificates + '</h2>' +
            '<div class="certificates-list">' + cards + '</div>' +
            '</section>';
    },

    renderSkills: function (data, ui) {
        var categories = data.categories.map(function (cat) {
            var skills = cat.skills.map(function (s) { return '<span class="skill-tag">' + s + '</span>'; }).join('');
            return '<div class="skills-category">' +
                '<h3 class="skills-category-name">' + cat.name + '</h3>' +
                '<div class="skills-tags">' + skills + '</div>' +
                '</div>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.skills + '</h2>' +
            '<div class="skills-grid">' + categories + '</div>' +
            '</section>';
    },

    renderProjects: function (data, ui) {
        var cards = data.projects.map(function (proj) {
            var tags = proj.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
            var logoHtml = proj.image
                ? '<div class="project-logo"><img src="' + proj.image + '" alt="' + proj.name + '" loading="lazy"></div>'
                : '';
            return '<article class="project-card">' +
                logoHtml +
                '<div class="project-content">' +
                '<div class="project-header">' +
                '<h3 class="project-name">' + proj.name + '</h3>' +
                '<a class="project-link" href="' + proj.url + '" target="_blank" rel="noopener">' +
                ui.labels.visitProject + ' ' + App.icons.external + '</a>' +
                '</div>' +
                '<p class="project-desc">' + proj.description + '</p>' +
                '<div class="project-tags">' + tags + '</div>' +
                '</div>' +
                '</article>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.projects + '</h2>' +
            '<div class="projects-grid">' + cards + '</div>' +
            '</section>';
    },

    renderConferences: function (data, ui) {
        var self = this;
        var cards = data.conferences.map(function (conf) {
            var tags = conf.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
            var photoHtml = conf.photo
                ? '<div class="conference-photo"><img src="' + conf.photo + '" alt="' + conf.title + '" loading="lazy"></div>'
                : '';
            var actions = '';
            if (conf.slidesUrl || conf.videoUrl) {
                actions = '<div class="conference-actions">';
                if (conf.slidesUrl) {
                    actions += '<a class="conf-action-btn" href="' + conf.slidesUrl + '" target="_blank" rel="noopener">' +
                        App.icons.slides + ' ' + ui.labels.viewSlides + '</a>';
                }
                if (conf.videoUrl) {
                    actions += '<a class="conf-action-btn" href="' + conf.videoUrl + '" target="_blank" rel="noopener">' +
                        App.icons.video + ' ' + ui.labels.viewVideo + '</a>';
                }
                actions += '</div>';
            }
            var roleHtml = conf.role
                ? '<span class="conference-role">' + conf.role + '</span>'
                : '';
            return '<article class="conference-card">' +
                photoHtml +
                '<div class="conference-content">' +
                '<div class="conference-title-row">' +
                '<h3 class="conference-title">' + conf.title + '</h3>' +
                roleHtml +
                '</div>' +
                '<p class="conference-event">' + conf.event + '</p>' +
                '<div class="conference-meta">' +
                '<span>' + App.icons.calendar + ' ' + self.formatDate(conf.date) + '</span>' +
                '<span>' + App.icons.mappin + ' ' + conf.location + '</span>' +
                '</div>' +
                '<p class="conference-desc">' + conf.description + '</p>' +
                '<div class="conference-tags">' + tags + '</div>' +
                actions +
                '</div>' +
                '</article>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.conferences + '</h2>' +
            '<div class="conferences-list">' + cards + '</div>' +
            '</section>';
    },

    renderContact: function (data, ui) {
        var socialLinks = data.social.map(function (s) {
            var icon = App.icons[s.icon] || '';
            return '<a class="social-link" href="' + s.url + '" target="_blank" rel="noopener">' +
                '<span class="social-icon">' + icon + '</span>' +
                '<span class="social-info">' +
                '<span class="social-platform">' + s.platform + '</span>' +
                '<span class="social-label">' + s.label + '</span>' +
                '</span>' +
                '</a>';
        }).join('');
        return '<section class="section contact-section">' +
            '<h2 class="section-heading">' + ui.sections.contact + '</h2>' +
            '<div class="contact-email-wrap">' +
            '<a class="contact-email" href="mailto:' + data.email + '">' +
            '<span class="contact-email-icon">' + App.icons.email + '</span>' +
            '<span>' + data.email + '</span>' +
            '</a>' +
            '</div>' +
            '<h3 class="social-heading">' + ui.sections.social + '</h3>' +
            '<div class="social-links">' + socialLinks + '</div>' +
            '</section>';
    },

    renderCvTab: function (data) {
        return this.renderProfileHero(data.profile, data.ui) +
            this.renderExperiences(data.experiences, data.ui) +
            this.renderEducation(data.education, data.ui) +
            this.renderCertificates(data.certificates, data.ui) +
            this.renderSkills(data.skills, data.ui);
    },

    renderProjectsTab: function (data) {
        return this.renderProjects(data.projects, data.ui) +
            this.renderConferences(data.conferences, data.ui);
    },

    renderInterests: function (data, ui) {
        var categories = data.categories.map(function (cat) {
            var icon = App.icons[cat.icon] || '';
            var title = ui.sections['interest_' + cat.key] || cat.key;
            var items = cat.items.map(function (item) {
                var cls = 'interest-tag' + (item.preferred ? ' interest-tag--preferred' : '');
                return '<span class="' + cls + '">' + item.label + '</span>';
            }).join('');
            return '<div class="interest-category">' +
                '<div class="interest-category-header">' +
                '<span class="interest-category-icon">' + icon + '</span>' +
                '<h3 class="interest-category-name">' + title + '</h3>' +
                '</div>' +
                '<div class="interest-tags">' + items + '</div>' +
                '</div>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.interests + '</h2>' +
            '<div class="interests-grid">' + categories + '</div>' +
            '</section>';
    },

    renderInterestsTab: function (data) {
        return this.renderInterests(data.interests, data.ui);
    },

    renderGallery: function (data, ui) {
        var items = data.items.map(function (item) {
            var cls = 'gallery-item' + (item.wide ? ' gallery-item--wide' : '');
            return '<figure class="' + cls + '">' +
                '<a href="' + item.image + '" target="_blank" rel="noopener">' +
                '<img class="gallery-image" src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
                '</a>' +
                '<figcaption class="gallery-caption">' + item.title + '</figcaption>' +
                '</figure>';
        }).join('');
        return '<section class="section">' +
            '<h2 class="section-heading">' + ui.sections.gallery + '</h2>' +
            '<div class="gallery-grid">' + items + '</div>' +
            '</section>';
    },

    renderGalleryTab: function (data) {
        return this.renderGallery(data.gallery, data.ui);
    },

    renderContactTab: function (data) {
        return this.renderContact(data.contact, data.ui);
    }
};
