cmake_minimum_required(VERSION 3.26)
project(task5 C)

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -std=c11 -Wall -Wextra")

add_library(format_string STATIC utility.h)
target_include_directories(format_string PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

add_executable(c main.c)
target_link_libraries(c PRIVATE format_string)

enable_testing()
add_subdirectory(tests)