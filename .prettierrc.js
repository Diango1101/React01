// .prettierrc.js

module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为 80
  tabWidth: 4, // 一个 tab 代表几个空格数，默认为 2
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  semi: false, // 行位是否使用分号，默认为 true
  useTabs: false, // 是否使用 tab 进行缩进，默认为 false，表示用空格进行缩减
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值：<none|es5|all>
  bracketSpacing: true // 对象大括号直接是否有空格，默认为 true，效果：{ foo: bar }
}
