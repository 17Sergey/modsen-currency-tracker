export default {
    testEnvironment: "jsdom",
    setupFiles: [`<rootDir>/jest-env.js`],
    setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|svg\\?url)$": "<rootDir>/src/utils/testing/__mocks__/imgSrcMock.ts",
        "\\.(svg)$": "<rootDir>/src/utils/testing/__mocks__/imgSvgMock.ts",

        "^@api/(.*)$": "<rootDir>/src/api/$1",
        "^@assets/(.*)$": "<rootDir>/src/assets/$1",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@constants/(.*)$": "<rootDir>/src/constants/$1",
        "^@context/(.*)$": "<rootDir>/src/context/$1",
        "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^@hoc/(.*)$": "<rootDir>/src/hoc/$1",
        "^@pages/(.*)$": "<rootDir>/src/pages/$1",
        "^@styles/(.*)$": "<rootDir>/src/styles/$1",
        "^@store/(.*)$": "<rootDir>/src/store/$1",
        "^@types/(.*)$": "<rootDir>/src/types/$1",
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
