let _DASH_API_BASE = `http://${window.location.hostname}:8888`;
let _ENVIRONMENT = 'development';

switch (window.location.hostname) {
    case 'www.domain.com':
        _DASH_API_BASE = 'https://api.domain.com';
        _ENVIRONMENT = 'production';
        break;
}

export const DASH_API_BASE = _DASH_API_BASE;
export const ENVIRONMENT = _ENVIRONMENT;