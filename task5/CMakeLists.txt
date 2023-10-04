cmake_minimum_required(VERSION 3.5)

project(task5)

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -std=c11 -Wall -Wextra")

add_library(utility INTERFACE)
target_include_directories(utility INTERFACE ${CMAKE_CURRENT_SOURCE_DIR})

add_executable(task5 task5.c)
target_link_libraries(task5 utility)

enable_testing()
add_subdirectory(tests)
