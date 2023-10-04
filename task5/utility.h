//
// Created by Aleksander Olsvik on 04.10.2023.
//

#ifndef TASK5_UTILITY_H
#define TASK5_UTILITY_H

//
// Created by Aleksander Olsvik on 27.09.2023.
//
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* replace_chars(const char s[]) {
    // Calculate the size of the input string s
    size_t size_of_s = strlen(s);
    size_t max_length = size_of_s * (strlen("&amp;")-1) + 1;
    char *result = (char *) malloc(max_length * sizeof(char));
    result[0] = '\0';
    // characters to be replaced: &, <, > with &amp;, &lt;, &gt;
    // Write rest of function to replace characters and increase length of result
    for(int i = 0; i<size_of_s; i++){
        if(s[i] == '&'){
            strcat(result, "&amp;");
        } else if(s[i] == '<'){
            strcat(result, "&lt;");
        } else if(s[i] == '>'){
            strcat(result, "&gt;");
        } else {
            strncat(result, &s[i], 1);
        }
    }
    return result;
}

#endif //TASK5_UTILITY_H
