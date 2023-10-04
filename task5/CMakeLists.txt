cmake_minimum_required(VERSION 3.26)
project(task5 C)

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -std=c11 -Wall -Wextra")

add_library(replace_chars STATIC replace_chars.c)
target_include_directories(replace_chars PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

add_executable(c main.c)
target_link_libraries(c PRIVATE replace_chars)

enable_testing()
add_subdirectory(tests)