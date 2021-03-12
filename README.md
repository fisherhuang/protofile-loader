# protofile-loader
import .proto file on webpack buildjs  
(由于protobufjs加载.proto文件时需要通过.load的方式，这样子会将.proto文件完全暴露出来，因此想通过webpack工具将.proto文件转成JS对象在编译的时候直接加载)  
[通过protobuf-loader以及proto-loader两个现有的插件找到将root输出的方式]  
