module.exports = {
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/tests/unit/**/*.spec.[jt]s?(x)'],
  collectCoverage: true, // 开启覆盖率收集
  reporters: [
    'default', // Jest 的默认 reporter
    [
      'jest-html-reporters',
      {
        publicPath: './coverage/html-report',
        filename: 'report.html',
        expandAll: false, // 是否默认展开所有测试用例
        showStack: true, // 是否显示堆栈跟踪
        showConfiguration: true, // 是否显示 Jest 的配置
        showPassed: true, // 是否显示通过的测试用例
        failedTestsExpandAll: true, // 是否默认展开所有失败的测试用例
        darkTheme: true, // 使用深色主题
      },
    ],
  ],
};
