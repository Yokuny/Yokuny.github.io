const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        config.resolve.alias['@components'] = path.join(__dirname, 'components');
        config.resolve.alias['@public'] = path.join(__dirname, 'public');
        return config;
    },
}

module.exports = nextConfig
