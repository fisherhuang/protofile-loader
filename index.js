const {getOptions,parseQuery} =require("loader-utils");
const protobuf =require("protobufjs");
const staticTarget = require('protobufjs/cli/targets/static-module');

const defaultOpts = {
  encode: true,  // 对象输出encode 方法
  decode: true,  // 对象输出decode 方法
  beautify: false, // 是否美化生成的代码
  comments: false, //uglify会删除所有注释，所以打包是默认保留
  wrap:"commonjs", // 默认使用了commonjs
  es6:false,//是否输出Es6的变量声明let|const
  create: false,   // 对象是否输出create 方法
  verify: false,  // 对象是否输出verify 方法
  convert: false,  // 对象是否输出convert（fromObject|toObject） 方法
  delimited: true, // 对象是否输出encodeDelimited|decodeDelimited 方法
  forceLong:false,//sfixed64 强制long
  forceNumber:false,//sfixed64 强制number；
  forceMessage:false,
  forceEnumString:false,//枚举的输出
};

const ProtofileLoader =function(source,map,meta){
  const callback=this.async();
  const customOptions=getOptions(this)||{};

  let query={};
  //读取参数
  if(this.resourceQuery)
  {
    query=parseQuery(this.resourceQuery);
  }

  //合并定制化的和参数个性化的设置
  const _opts=Object.assign({},defaultOpts,customOptions,query);

  try{
    const _root=protobuf.loadSync(this.resourcePath);
    if(_opts.json)
    {

    }
    else
      staticTarget(_root,_opts,function(err,output){
        callback(err,output)
      })
  }
  catch(ex){
    console.log(ex,"ex");

    return `export default {}`
  }
}

module.exports=ProtofileLoader;