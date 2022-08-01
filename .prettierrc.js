module.exports = {
  // 结尾分号
  semi: false,
  // 箭头函数，单个参数是否添加括号 avoid:省略 always:有括号
  arrowParens: 'avoid',
  // 行尾符
  // lf– 仅换行 ( \n)，常见于 Linux 和 macOS 以及 git repos 内部
  // crlf- 回车 + 换行字符 ( \r\n)，常见于 Windows
  // cr- 仅回车字符 ( \r)，很少使用
  // auto- 保持现有的行尾（一个文件中的混合值通过查看第一行之后使用的内容进行标准化）
  endOfLine: 'auto',
  // tab键缩进宽度
  tabWidth: 2,
  // 使用单引号
  singleQuote: true,
  // 指定代码长度，超出换行，默认80
  printWidth: 120,
  // 在对象或数组最后一个元素后面是否加逗号，有三个可选值"<none|es5|all>"
  trailingComma: "none",
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true
}