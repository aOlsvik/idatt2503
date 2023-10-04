//
// Created by Aleksander Olsvik on 04.10.2023.
//

#include <string>
using namespace std;
#ifndef TASK5_UTILITY_H
#define TASK5_UTILITY_H

string replace_chars(const string &s) {
    string new_string;
    for (char ch : s) {
        if (ch == '&') {
            new_string += "&amp";
        } else if (ch == '<') {
            new_string += "&lt";
        } else if (ch == '>') {
            new_string += "&gt";
        } else {
            new_string += ch;
        }
    }
    return new_string;
}

#endif //TASK5_UTILITY_H
