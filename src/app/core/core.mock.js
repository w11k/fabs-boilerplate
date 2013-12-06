'use strict';

angular.module('fabs.boilerplate.core').constant('w11kMockData', {
  'login': 'w11k',
  'id': 189944,
  'url': 'https://api.github.com/orgs/w11k',
  'repos_url': 'https://api.github.com/orgs/w11k/repos',
  'events_url': 'https://api.github.com/orgs/w11k/events',
  'members_url': 'https://api.github.com/orgs/w11k/members{/member}',
  'public_members_url': 'https://api.github.com/orgs/w11k/public_members{/member}',
  'avatar_url': 'https://1.gravatar.com/avatar/10220758ee9d64063d9a21e76227cbf0?d=https%3A%2F%2Fidenticons.github.com%2F036acb5334fd73ab5f84cd1763391489.png&r=x',
  'name': 'Weigle Wilczek GmbH',
  'company': null,
  'blog': 'www.weiglewilczek.com',
  'location': 'Esslingen, Germany',
  'email': 'info@weiglewilczek.com',
  'public_repos': 25,
  'public_gists': 0,
  'followers': 0,
  'following': 0,
  'html_url': 'https://github.com/w11k',
  'created_at': '2010-01-26T06:37:28Z',
  'updated_at': '2013-12-06T11:33:05Z',
  'type': 'Organization'
});

angular.module('fabs.boilerplate.core').run(function ($httpBackend, w11kMockData) {
  $httpBackend.when('GET', /\/api\/orgs\/w11k/).respond(w11kMockData);
});
