const path=require("path");

module.exports={
  mode:"development",
  entry:{
    index:"./test/index.test.js"
  },
  output:{
    filename:"[name].bundle.js",
    path:path.resolve(__dirname,"dist")
  },
  module:{
    rules:[{
      test:/.js$/i,
      use:['babel-loader']
    },
      {
        test:/.proto$/i,
        use:[{
          loader:path.resolve(__dirname,"index.js"),
          options:{
            test:false
          }
      }]
      }
    ]
  }
}