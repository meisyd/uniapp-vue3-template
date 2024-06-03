module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this);
    },
  },
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name",
    },
    description: {
      type: "string",
      required: false,
      message: "Project description",
      default: "基于 Uniapp + Vue3 + Vite5 + @lx/ui + UnoCss 的跨端 App",
    },
    author: {
      type: "string",
      message: "Author",
    },
    uni_simple_router: {
      type: "confirm",
      message: "你的项目中需要使用 uni-simple-router 吗？",
      default: true,
    },
  },
  filters: {
    "src/uni-simple-router/*": "uni_simple_router",
  },
  completeMessage:
    "{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}",
};
