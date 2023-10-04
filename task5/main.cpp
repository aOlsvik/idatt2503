//
// Created by Aleksander Olsvik on 27.09.2023.
//
#include <iostream>
#include <string>
#include "utility.h"
using namespace std;

int main() {
    string s1 = "Hei";
    string s2 = "Hei <3";
    string s3 = "Er 3 > 4?";
    string s4 = "Hu & hei";

    cout << s1 << " -> " << replace_chars(s1) << endl;
    cout << s2 << " -> " << replace_chars(s2) << endl;
    cout << s3 << " -> " << replace_chars(s3) << endl;
    cout << s4 << " -> " << replace_chars(s4) << endl;

    return 0;
}

