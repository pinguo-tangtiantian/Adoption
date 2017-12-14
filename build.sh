#删除打包后的文件，但是不删除模板文件
find ./server/views -depth 1 -type f \( -iname "*.*" ! -iname "*.*.*" \) -exec rm {} \;

webpack --config webpack.build.config.js