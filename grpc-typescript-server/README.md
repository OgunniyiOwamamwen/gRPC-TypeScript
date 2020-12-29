......................gRPC TypeScript Service...................

yarn init -y
yarn add typescript -D
yarn run tsc --init
yarn add grpc
yarn add ts-node grpc-tools @types/google-protobuf grpc_tools_node_protoc_ts -D
..................

Added package.json
......
  "scripts": {
    "build": "sh proto/build.sh",
    "server": "ts-node server/index.ts"
  }
  
..............
BUILD  APP
..............
yarn build


run execution
.............
yarn server
