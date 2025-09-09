// lambdatest-setup.ts
const LT_USERNAME = 'heyitslouieji';
const LT_ACCESS_KEY = 'LT_YuIWos5lW0XXBhfNFdWGEycqTsFyz65jTDf1goVlLgwxIJo';

export const ws = (
    browserName: 'Chrome' | 'MicrosoftEdge' | 'WebKit',
    platform: string,
) => {
    const capabilities: any = {
        browserName,
        browserVersion: 'latest',
        platform,
        'LT:Options': {
            build: 'PW-TS on LambdaTest',
            projectName: 'My Playwright Project',
            name: `Sample run ${browserName} - ${platform}`,
            user: LT_USERNAME,
            accessKey: LT_ACCESS_KEY,
            network: true,
            video: true,
            console: true,
        }
    };

    return `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
    )}`;
};
