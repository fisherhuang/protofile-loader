# protofile-loader
import .proto file on webpack buildjs  


1. 由于protobufjs加载.proto文件时需要通过.load的方式，这样子会将.proto文件完全暴露出来，因此想通过webpack工具将.proto文件转成JS对象在编译的时候直接加载
2. 通过protobuf-loader以及proto-loader两个现有的插件找到将root输出的方式
3. 由于json文件格式编译出来的代码量比较大因此当前只支持了.proto文件的转换后期看情况去使用json-module去转换
4. options设置
    -encode: true,  // 对象输出encode 方法
    -decode: true,  // 对象输出decode 方法
    -beautify: false, // 是否美化生成的代码
    -comments: false, //uglify会删除所有注释，所以打包是默认保留
    -wrap:"commonjs", // 默认使用了commonjs
    -es6:false,//是否输出Es6的变量声明let|const
    -create: false,   // 对象是否输出create 方法
    -verify: false,  // 对象是否输出verify 方法
    -convert: false,  // 对象是否输出convert（fromObject|toObject） 方法
    -delimited: true, // 对象是否输出encodeDelimited|decodeDelimited 方法
    -forceLong:false,//sfixed64 强制long
    -forceNumber:false,//sfixed64 强制number；
    -forceMessage:false,
    -forceEnumString:false,//枚举的输出
