export function withUtm(url) {
    try {
        const u = new URL(url); 
        u.searchParams.set('utm_source', 'site');
        u.searchParams.set('utm_medium', 'referral');
        u.searchParams.set('utm_campaign', 'landing');
        return u.toString();
    } catch (e) {
        return url;
    }
}