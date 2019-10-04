cmake_minimum_required(VERSION 2.8)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -s WASM=1 -s USE_SDL=2 -s MODULARIZE=1 -s EXPORT_ES6=1 -s ASSERTIONS=1 -O3")

add_executable(emscriptenmodule main.cpp)
